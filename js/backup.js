<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Vessel</title>
  <script src="https://d3js.org/d3.v5.min.js"></script>
  <script src="src/svg-helper.js"></script>
</head>

<body>

  <div style="width: 100%; height: 800px; border: 1px solid red; display: flex;">
    <div id="leftPanel" style="width: 50%; border: 1px solid blue;">
    </div>
    <div id="rightPanel" style="flex: 1; border: 1px solid blue;">
    </div>
  </div>

  <script>

    var leftPanel = null;
    var rightPanel = null;

    const loadLeftPanel = async (id, width, height) => {

      const { svg, scaleX, scaleY } = svgHelper.init({
        id: id,
        width: width,
        height: height,
        margin: {
          top: 30,
          right: 30,
          bottom: 30,
          left: 30
        }
      });

      const result = await d3.json("/data/vessels.json")
      console.log(result);

      // const lineFunction = d3.line()
      //   .x(function (d) { return scaleX(d.x); })
      //   .y(function (d) { return scaleY(d.y); });

      // const pathData = [{ "x": 20, "y": 40 }, { "x": 40, "y": 20 }, { "x": 60, "y": 20 }, { "x": 80, "y": 40 }, { "x": 60, "y": 60 }, { "x": 40, "y": 60 }];

      // svg.append("path")
      //   .attr("d", lineFunction(pathData));

      // svg.append("clipPath")
      //   .attr("id", "ellipse-clip")
      //   .append("ellipse")
      //   .attr("cx", 175)
      //   .attr("cy", 100)
      //   .attr("rx", 100)
      //   .attr("ry", 100);

      // svg.append("rect")
      //   .attr("x", 125)
      //   .attr("y", 75)
      //   .attr("clip-path", "url(#ellipse-clip)")
      //   .style("fill", "lightgrey")
      //   .attr("height", 100)
      //   .attr("width", 200);

      // svg.append("path.acrTo")        // attach a rectangle
      //   .attr("x1", 100)        // position the left of the rectangle
      //   .attr("y1", 200)         // position the top of the rectangle
      //   .attr("x2", 150)        // position the left of the rectangle
      //   .attr("y2", 150)         // position the top of the rectangle
      //   .attr("radius", 50)         // position the top of the rectangle
      //   .style("fill", "lightgrey")   // fill the clipped path with grey
      //   .attr("height", 100)    // set the height
      //   .attr("width", 200);    // set the width

      // const path = d3.path();
      // path.moveTo(100, 200);
      // path.arcTo(100,200,150,150,50)
      // svg.append("path").attr("d", path.toString())


      // svg.selectAll('line')
      //   .enter()
      //   .append(g)
      //   .append('line')
      //   .attr('x1', 0)
      //   .attr('y1', 0)
      //   .attr('x2', 300)
      //   .attr('y2', 300)
      //   .attr("stroke", 'red')
      //   .attr("stroke-width", 1);

      const comp = svg.selectAll('.comp')
        .data(result)
        .enter()
        .append('g')
        .attr('class', 'comp');

      // comp.append('path')
      //   .attr('class', 'comp')
      //   .attr("d", x => lineFunction(x.Data))
      //   .on('click', function () {
      //     console.log('Hello');
      //     const mouse = d3.mouse(this);
      //     console.log(mouse);
      //     // d3.select(this).style("fill", '#000');
      //     console.log(d3.select(this).style("fill"))
      //     console.log(d3.select(this).attr("id"))
      //   })
      //   .on('mousemove', function () {
      //     const mouse = d3.mouse(this);
      //     console.log(mouse);
      //   })
      //   .on('mouseenter', function () {
      //     console.log(d3.select(this).attr("id"))
      //     const mouse = d3.mouse(this);
      //     console.log('mouseenter');
      //   })
      //   .on('mouseleave', function () {
      //     const mouse = d3.mouse(this);
      //     console.log('mouseleave');
      //   })
      //   .attr('id', x => x.Id)
      //   .attr("fill", x => x.Color)
      //   .attr("stroke", x => x.Color)
      //   .attr("stroke-width", 1);

      comp.append('polygon')
        .attr('class', 'comp')
        .attr("points", d => {
          return d.Data.map(d => {
            return [scaleX(d.x), scaleY(d.y)].join(",");
          }).join(" ");
        })
        .on('click', function () {
          console.log('Hello');
          const mouse = d3.mouse(this);
          console.log(mouse);
          // d3.select(this).style("fill", '#000');
          console.log(d3.select(this).style("fill"))
          console.log(d3.select(this).attr("id"))
        })
        .on('mousemove', function () {
          const mouse = d3.mouse(this);
          console.log(mouse);
        })
        .on('mouseenter', function () {
          console.log(d3.select(this).attr("id"))
          const mouse = d3.mouse(this);
          console.log('mouseenter');
        })
        .on('mouseleave', function () {
          const mouse = d3.mouse(this);
          console.log('mouseleave');
        })
        .attr('id', x => x.Id)
        .attr("fill", x => x.Color)
        .attr("stroke", x => x.Color)
        .attr("stroke-width", 1);

      leftPanel = svg;

    }

    // const loadRightPanel = async (id, width, height) => {

    //   const { svg, scaleX, scaleY } = svgHelper.init({
    //     id: id,
    //     width: width,
    //     height: height,
    //     margin: {
    //       top: 30,
    //       right: 30,
    //       bottom: 30,
    //       left: 30
    //     }
    //   });

    //   const result = await d3.json("/data/vessels.json")
    //   console.log(result);


    //   const comp = svg.selectAll('.comp')
    //     .data(result)
    //     .enter()
    //     .append('g')
    //     .attr('class', 'comp');

    //   comp.append('polygon')
    //     .attr('class', 'comp')
    //     .attr("points", d => {
    //       return d.Data.map(d => {
    //         return [scaleX(d.x), scaleY(d.y)].join(",");
    //       }).join(" ");
    //     })
    //     .on('click', function () {
    //       console.log('Hello');
    //       const mouse = d3.mouse(this);
    //       console.log(mouse);
    //       // d3.select(this).style("fill", '#000');
    //       console.log(d3.select(this).style("fill"))
    //       console.log(d3.select(this).attr("id"))
    //     })
    //     .on('mousemove', function () {
    //       const mouse = d3.mouse(this);
    //       console.log(mouse);
    //     })
    //     .on('mouseenter', function () {
    //       console.log(d3.select(this).attr("id"))
    //       const mouse = d3.mouse(this);
    //       console.log('mouseenter');
    //     })
    //     .on('mouseleave', function () {
    //       const mouse = d3.mouse(this);
    //       console.log('mouseleave');
    //     })
    //     .attr('id', x => x.Id)
    //     .attr("fill", x => x.Color)
    //     .attr("stroke", x => x.Color)
    //     .attr("stroke-width", 1);

    //   leftPanel = svg;

    // }

    loadLeftPanel('leftPanel', 500, 500);
    // loadRightPanel('rightPanel', 500, 500);

  </script>

  <!-- <script src="src/app.js"></script> -->
</body>

</html>