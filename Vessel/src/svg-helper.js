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
    .domain([0, 250])
    .range([0, width])
    .nice();

  const scaleY = d3.scaleLinear()
    .domain([0, 250])
    .range([height, 0])
    .nice();

  svg.append('g')
    .call(d3.axisLeft(scaleY));

  svg.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(scaleX));

  return {
    svg,
    scaleX,
    scaleY
  };

}
