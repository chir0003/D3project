// Temperature anomaly data (1880-2023)
const data = [
    { year: 1880, anomaly: -0.16 }, { year: 1881, anomaly: -0.07 }, { year: 1882, anomaly: -0.10 },
    { year: 1883, anomaly: -0.17 }, { year: 1884, anomaly: -0.28 }, { year: 1885, anomaly: -0.33 },
    { year: 1886, anomaly: -0.31 }, { year: 1887, anomaly: -0.35 }, { year: 1888, anomaly: -0.17 },
    { year: 1889, anomaly: -0.10 }, { year: 1890, anomaly: -0.35 }, { year: 1891, anomaly: -0.23 },
    { year: 1892, anomaly: -0.29 }, { year: 1893, anomaly: -0.32 }, { year: 1894, anomaly: -0.30 },
    { year: 1895, anomaly: -0.22 }, { year: 1896, anomaly: -0.11 }, { year: 1897, anomaly: -0.11 },
    { year: 1898, anomaly: -0.27 }, { year: 1899, anomaly: -0.18 }, { year: 1900, anomaly: -0.08 },
    { year: 1901, anomaly: -0.15 }, { year: 1902, anomaly: -0.27 }, { year: 1903, anomaly: -0.37 },
    { year: 1904, anomaly: -0.47 }, { year: 1905, anomaly: -0.26 }, { year: 1906, anomaly: -0.22 },
    { year: 1907, anomaly: -0.39 }, { year: 1908, anomaly: -0.43 }, { year: 1909, anomaly: -0.48 },
    { year: 1910, anomaly: -0.43 }, { year: 1911, anomaly: -0.44 }, { year: 1912, anomaly: -0.36 },
    { year: 1913, anomaly: -0.34 }, { year: 1914, anomaly: -0.15 }, { year: 1915, anomaly: -0.14 },
    { year: 1916, anomaly: -0.35 }, { year: 1917, anomaly: -0.45 }, { year: 1918, anomaly: -0.29 },
    { year: 1919, anomaly: -0.28 }, { year: 1920, anomaly: -0.27 }, { year: 1921, anomaly: -0.19 },
    { year: 1922, anomaly: -0.28 }, { year: 1923, anomaly: -0.26 }, { year: 1924, anomaly: -0.27 },
    { year: 1925, anomaly: -0.22 }, { year: 1926, anomaly: -0.11 }, { year: 1927, anomaly: -0.21 },
    { year: 1928, anomaly: -0.20 }, { year: 1929, anomaly: -0.36 }, { year: 1930, anomaly: -0.15 },
    { year: 1931, anomaly: -0.09 }, { year: 1932, anomaly: -0.16 }, { year: 1933, anomaly: -0.29 },
    { year: 1934, anomaly: -0.12 }, { year: 1935, anomaly: -0.20 }, { year: 1936, anomaly: -0.14 },
    { year: 1937, anomaly: -0.03 }, { year: 1938, anomaly: 0.00 }, { year: 1939, anomaly: -0.01 },
    { year: 1940, anomaly: 0.13 }, { year: 1941, anomaly: 0.19 }, { year: 1942, anomaly: 0.06 },
    { year: 1943, anomaly: 0.09 }, { year: 1944, anomaly: 0.20 }, { year: 1945, anomaly: 0.09 },
    { year: 1946, anomaly: -0.07 }, { year: 1947, anomaly: -0.02 }, { year: 1948, anomaly: -0.11 },
    { year: 1949, anomaly: -0.11 }, { year: 1950, anomaly: -0.17 }, { year: 1951, anomaly: -0.07 },
    { year: 1952, anomaly: 0.01 }, { year: 1953, anomaly: 0.08 }, { year: 1954, anomaly: -0.13 },
    { year: 1955, anomaly: -0.14 }, { year: 1956, anomaly: -0.19 }, { year: 1957, anomaly: 0.05 },
    { year: 1958, anomaly: 0.06 }, { year: 1959, anomaly: 0.03 }, { year: 1960, anomaly: -0.03 },
    { year: 1961, anomaly: 0.06 }, { year: 1962, anomaly: 0.03 }, { year: 1963, anomaly: 0.05 },
    { year: 1964, anomaly: -0.20 }, { year: 1965, anomaly: -0.11 }, { year: 1966, anomaly: -0.06 },
    { year: 1967, anomaly: -0.02 }, { year: 1968, anomaly: -0.08 }, { year: 1969, anomaly: 0.05 },
    { year: 1970, anomaly: 0.03 }, { year: 1971, anomaly: -0.08 }, { year: 1972, anomaly: 0.01 },
    { year: 1973, anomaly: 0.16 }, { year: 1974, anomaly: -0.07 }, { year: 1975, anomaly: -0.01 },
    { year: 1976, anomaly: -0.10 }, { year: 1977, anomaly: 0.18 }, { year: 1978, anomaly: 0.07 },
    { year: 1979, anomaly: 0.16 }, { year: 1980, anomaly: 0.26 }, { year: 1981, anomaly: 0.32 },
    { year: 1982, anomaly: 0.14 }, { year: 1983, anomaly: 0.30 }, { year: 1984, anomaly: 0.16 },
    { year: 1985, anomaly: 0.12 }, { year: 1986, anomaly: 0.18 }, { year: 1987, anomaly: 0.32 },
    { year: 1988, anomaly: 0.39 }, { year: 1989, anomaly: 0.27 }, { year: 1990, anomaly: 0.45 },
    { year: 1991, anomaly: 0.40 }, { year: 1992, anomaly: 0.22 }, { year: 1993, anomaly: 0.23 },
    { year: 1994, anomaly: 0.31 }, { year: 1995, anomaly: 0.45 }, { year: 1996, anomaly: 0.33 },
    { year: 1997, anomaly: 0.46 }, { year: 1998, anomaly: 0.61 }, { year: 1999, anomaly: 0.38 },
    { year: 2000, anomaly: 0.39 }, { year: 2001, anomaly: 0.54 }, { year: 2002, anomaly: 0.63 },
    { year: 2003, anomaly: 0.62 }, { year: 2004, anomaly: 0.54 }, { year: 2005, anomaly: 0.69 },
    { year: 2006, anomaly: 0.64 }, { year: 2007, anomaly: 0.66 }, { year: 2008, anomaly: 0.54 },
    { year: 2009, anomaly: 0.64 }, { year: 2010, anomaly: 0.72 }, { year: 2011, anomaly: 0.61 },
    { year: 2012, anomaly: 0.62 }, { year: 2013, anomaly: 0.68 }, { year: 2014, anomaly: 0.74 },
    { year: 2015, anomaly: 0.90 }, { year: 2016, anomaly: 1.02 }, { year: 2017, anomaly: 0.92 },
    { year: 2018, anomaly: 0.85 }, { year: 2019, anomaly: 0.98 }, { year: 2020, anomaly: 1.02 },
    { year: 2021, anomaly: 0.85 }, { year: 2022, anomaly: 0.89 }, { year: 2023, anomaly: 1.18 }
];

// Set up dimensions and margins
const margin = { top: 40, right: 30, bottom: 60, left: 60 };
const width = 900 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Create SVG container
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Create scales
const x = d3.scaleBand()
    .domain(data.map(d => d.year))
    .range([0, width])
    .padding(0.1);

const y = d3.scaleLinear()
    .domain([-0.5, 1.5])
    .range([height, 0]);

// Add X axis
svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickValues(x.domain().filter((d, i) => i % 10 === 0)))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
svg.append("g")
    .call(d3.axisLeft(y).tickFormat(d => d + "°C"));

// Add axis labels
svg.append("text")
    .attr("class", "axis-label")
    .attr("x", width / 2)
    .attr("y", height + 40)
    .text("Year");

svg.append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -40)
    .text("Temperature Anomaly (°C)");

// Create tooltip
const tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Add bars
svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.year))
    .attr("width", x.bandwidth())
    .attr("y", d => y(Math.max(0, d.anomaly)))
    .attr("height", d => Math.abs(y(d.anomaly) - y(0)))
    .attr("fill", d => d.anomaly >= 0 ? "#ff6b6b" : "#4dabf7")
    .on("mouseover", function(event, d) {
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(`Year: ${d.year}<br/>Anomaly: ${d.anomaly.toFixed(2)}°C`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    });

// Add zero line
svg.append("line")
    .attr("x1", 0)
    .attr("y1", y(0))
    .attr("x2", width)
    .attr("y2", y(0))
    .attr("stroke", "#666")
    .attr("stroke-dasharray", "4,4"); 
