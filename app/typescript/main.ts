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
        var diameter = 1000;

        var svg = d3.select("#science").append("svg")
          .attr("width", '100%')
          .attr("height", '100%')
          .attr("preserveAspectRatio", "xMinYMin meet")
          .attr("viewBox", "0,0,1000,1000")
          .attr("class", "bubble");


        d3.json("data/pokemon.json", function(error, root) {

          var node = svg.selectAll(".node")
            .data(_.values(root))
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
              return "translate(" + d.attack * 5 + "," + d.defense * 5 + ")";
            });

          node.append("title")
            .text(function(d) {
              return d.name + ":: attack: " + d.attack;
            });

          node.append("circle")
            .attr("r", function(d) {
              return d.attack / 4 + d.defense / 6;
            })
            .style("fill", function(d) {
              switch(d.type) {
                case "fire":
                  return "red";
                  break;
                case "grass":
                  return "green";
                  break;
                case "water":
                  return "dodgerblue";
                  break;
                case "electric":
                  return "yellow";
                  break;
                case "ice":
                  return "white";
                  break;
                case "normal":
                  return "grey";
                  break;
                case "ghost":
                  return "pink";
                  break;
                case "fighting":
                  return "sienna";
                  break;
                case "psychic":
                  return "purple";
                  break;
                case "rock":
                  return "teal";
                  break;
                case "ground":
                  return "brown";
                  break;
                case "dragon":
                  return "orange";
                  break;
                case "poison":
                  return "chocolate";
                  break;
                case "bug":
                  return "lawngreen";
                  break;
              }
            })
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
