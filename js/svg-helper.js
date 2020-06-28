const svgHelper = {};

/**
 * 
 * @props:
 * - id
 * - width
 * - height
 * - margin: {top, right, bottom, left}
 */
svgHelper.init = props => {

  let { id, width, height, margin } = props;

  width = width - margin.right - margin.left;
  height = height - margin.top - margin.bottom;

  const svg = d3.select(`#${id}`)
    .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const scaleX = d3.scaleLinear()
    .nice()
    .domain([0, 250])
    .range([0, width]);

  const scaleY = d3.scaleLinear()
    .nice()
    .domain([0, 250])
    .range([height, 0]);

  svg.append('g')
    .call(d3.axisLeft(scaleY))

  const yGridLines = d3.axisLeft(scaleY)
    .ticks(10)
    .tickFormat('')
    .tickSize(-width);

  const gridY = svg.append('g')
    .attr('class', 'grid')
    .attr('stroke', 'lightgray')
    .call(yGridLines)
    .call(g => g.select(".domain").remove());

  svg.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(scaleX));

  const xGridLines = d3.axisBottom(scaleX)
    .ticks(10)
    .tickFormat('')
    .tickSize(height);

  const gridX = svg.append('g')
    .attr('class', 'grid')
    .attr('stroke', 'lightgray')
    .call(xGridLines)
    .call(g => g.select(".domain").remove());

  return {
    svg,
    scaleX,
    scaleY
  };

}
