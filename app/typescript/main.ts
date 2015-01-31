/// <reference path="definition/d3.d.ts" />

declare var angular:any;
declare var d3:D3.Base;
declare var _ : any;

angular.module("DemoApp",['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
    	templateUrl:'partials/main.html',
    	controller:function(){
        var diameter = 1600;

        var svg = d3.select("#science").append("svg")
          .attr("width", '100%')
          .attr("height", '100%')
          .attr("preserveAspectRatio", "xMinYMin meet")
          .attr("viewBox", "0,0,"+diameter+","+diameter)
          .attr("class", "bubble");

        var colors = d3.scale.ordinal();
        colors.domain(['fire','grass','electric','bug', 'fighting','psychic','flying','normal','ghost', 'dragon','water','ice','poison','ground','rock']);
        colors.range([ 'red', 'green','yellow',  'grey','pink',   'purple', 'cyan',  'beige', 'indigo','azure' ,'pink','blue','black','brown','olivedrab','darkslategrey']);

        var scale = d3.scale.linear();
        scale.domain([0,150]);
        scale.range([0,diameter]);

        var circleScale = d3.scale.linear();
        circleScale.domain([0,300]);
        circleScale.range([0,50]);

        d3.json("data/pokemon.json", function(error, root) {

          var node = svg.selectAll(".node")
            .data(_.values(root))
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
              return "translate(" + scale(d.attack) + "," + scale(d.defense) + ")";
            });

          node.append("title")
            .text(function(d) {
              return d.name + ":: attack: " + d.attack;
            });

          node.append("circle")
            .attr("r", function(d) {
              return circleScale(d.attack + d.defense);
            })
            .style("fill", function(d){return colors(d.type)})
          .style('opacity',0.5);

          node.append("text")
            .attr("dy", ".2em")
            .style("text-anchor", "middle")
            .text(function(d) { return d.name; });
        });

        d3.select(self.frameElement).style("height", diameter + "px");

    	}
	})
	.state('usage',{
		url: '/usage',
    	templateUrl:'partials/usage.html'
	})
	.state('features',{
		url: '/features',
    	templateUrl:'partials/features.html'
	})
})
