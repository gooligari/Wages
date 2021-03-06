class HomeController {
  constructor() {
    this.name = 'home';

    var chart = AmCharts.makeChart( "chartd", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "title": "New",
    "value": 4852
  }, {
    "title": "Returning",
    "value": 9899
  }, {
    "title": "Returning",
    "value": 899
  } ],
  "titleField": "title",
  "valueField": "value",
  "labelRadius": 5,

  "radius": "42%",
  "innerRadius": "60%",
  "labelText": "[[title]]",
  "export": {
    "enabled": true
  }
} );



var chart = AmCharts.makeChart( "chartdi", {
  "type": "serial",
  "theme": "light",
  "marginRight": 40,
  "marginLeft": 40,
  "autoMarginOffset": 20,
  "dataDateFormat": "YYYY-MM-DD",
  "valueAxes": [ {
    "id": "v1",
    "axisAlpha": 0,
    "position": "left",
    "ignoreAxisWidth": true
  } ],
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },
  "graphs": [ {
    "id": "g1",
    "balloon": {
      "drop": true,
      "adjustBorderColor": false,
      "color": "#ffffff",
      "type": "smoothedLine"
    },
    "fillAlphas": 0.2,
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "title": "red line",
    "useLineColorForBulletBorder": true,
    "valueField": "value",
    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
  } ],
  "chartCursor": {
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha": 0,
    "zoomable": false,
    "valueZoomable": true,
    "valueLineAlpha": 0.5
  },
  "valueScrollbar": {
    "autoGridCount": true,
    "color": "#000000",
    "scrollbarHeight": 50
  },
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "dashLength": 1,
    "minorGridEnabled": true
  },
  "export": {
    "enabled": true
  },
  "dataProvider": [ {
    "date": "2001-07-27",
    "value": 13
  }, {
    "date": "2002-07-28",
    "value": 11
  }, {
    "date": "2003-07-29",
    "value": 15
  }, {
    "date": "2004-07-30",
    "value": 16
  },  {
    "date": "2005-09-11",
    "value": 34
  }, {
    "date": "2006-10-15",
    "value": 38
  }, {
    "date": "2007-11-03",
    "value": 68
  }, {
    "date": "2008-11-04",
    "value": 65
  }, {
    "date": "2009-11-05",
    "value": 71
  }, {
    "date": "2010-11-06",
    "value": 75
  }, {
    "date": "2011-01-23",
    "value": 85
  }, {
    "date": "2012-01-24",
    "value": 85
  }, {
    "date": "2013-01-25",
    "value": 80
  }, {
    "date": "2014-01-26",
    "value": 87
  }, {
    "date": "2015-01-27",
    "value": 84
  }, {
    "date": "2016-01-28",
    "value": 83
  }, {
    "date": "2017-01-29",
    "value": 84
  }, {
    "date": "2018-01-30",
    "value": 81
  } ]
} );



var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
	"theme": "light",
    "titles": [{
        "text": "Traffic incidents per year",
        "size": 15
    }],
    "legend": {
        "align": "center",
        "equalWidths": false,
        "periodValueText": "total: [[value.sum]]",
        "valueAlign": "left",
        "valueText": "[[value]] ([[percents]]%)",
        "valueWidth": 100
    },
    "dataProvider": [{
        "year": "2000",
        "cars": 1587,
        "motorcycles": 650,
        "bicycles": 121
    }, {
        "year": "1995",
        "cars": 1567,
        "motorcycles": 683,
        "bicycles": 146
    }, {
        "year": "1996",
        "cars": 1617,
        "motorcycles": 691,
        "bicycles": 138
    }, {
        "year": "1997",
        "cars": 1630,
        "motorcycles": 642,
        "bicycles": 127
    }, {
        "year": "1998",
        "cars": 1660,
        "motorcycles": 699,
        "bicycles": 105
    }, {
        "year": "1999",
        "cars": 1683,
        "motorcycles": 721,
        "bicycles": 109
    }, {
        "year": "2000",
        "cars": 1691,
        "motorcycles": 737,
        "bicycles": 112
    }, {
        "year": "2001",
        "cars": 1298,
        "motorcycles": 680,
        "bicycles": 101
    }, {
        "year": "2002",
        "cars": 1275,
        "motorcycles": 664,
        "bicycles": 97
    }, {
        "year": "2009",
        "cars": 1145,
        "motorcycles": 219,
        "bicycles": 88
    }, {
        "year": "2010",
        "cars": 1163,
        "motorcycles": 201,
        "bicycles": 82
    }, {
        "year": "2011",
        "cars": 1180,
        "motorcycles": 285,
        "bicycles": 87
    }, {
        "year": "2012",
        "cars": 1159,
        "motorcycles": 277,
        "bicycles": 71
    }],
    "valueAxes": [{
        "stackType": "100%",
        "gridAlpha": 0.07,
        "position": "left",
        "title": "percent"
    }],
    "graphs": [{
        "balloonText": "<img src='http://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "fillAlphas": 0.5,
        "lineAlpha": 0.5,
        "title": "Cars",
        "valueField": "cars"
    }, {
        "balloonText": "<img src='http://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "fillAlphas": 0.5,
        "lineAlpha": 0.5,
        "title": "Motorcycles",
        "valueField": "motorcycles"
    }, {
        "balloonText": "<img src='http://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "fillAlphas": 0.5,
        "lineAlpha": 0.5,
        "title": "Bicycles",
        "valueField": "bicycles"
    }],
    "plotAreaBorderAlpha": 0,
    "marginLeft": 0,
    "marginBottom": 0,
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "year",
    "categoryAxis": {
        "startOnAxis": true,
        "axisColor": "#DADADA",
        "gridAlpha": 0.07
    },
    "export": {
    	"enabled": true
     }
});


var chart = AmCharts.makeChart("chartspan", {
  "type": "serial",
  "theme": "light",
  "marginRight": 70,
  "dataProvider": [{
    "country": "USA",
    "visits": 3025,
    "color": "#FF0F00"
  }, {
    "country": "China",
    "visits": 1882,
    "color": "#FF6600"
  }, {
    "country": "Japan",
    "visits": 1809,
    "color": "#FF9E01"
  }, {
    "country": "Germany",
    "visits": 1322,
    "color": "#FCD202"
  }, {
    "country": "UK",
    "visits": 1122,
    "color": "#F8FF01"
  }, {
    "country": "France",
    "visits": 1114,
    "color": "#B0DE09"
  }, {
    "country": "India",
    "visits": 984,
    "color": "#04D215"
  }, {
    "country": "Spain",
    "visits": 711,
    "color": "#0D8ECF"
  }, {
    "country": "Netherlands",
    "visits": 665,
    "color": "#0D52D1"
  }, {
    "country": "Russia",
    "visits": 580,
    "color": "#2A0CD0"
  }, {
    "country": "South Korea",
    "visits": 443,
    "color": "#8A0CCF"
  }, {
    "country": "Canada",
    "visits": 441,
    "color": "#CD0D74"
  }],
  "valueAxes": [{
    "axisAlpha": 0,
    "position": "left",
    "title": "Visitors from country"
  }],
  "startDuration": 1,
  "graphs": [{
    "balloonText": "<b>[[category]]: [[value]]</b>",
    "fillColorsField": "color",
    "fillAlphas": 0.9,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  }],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "country",
  "categoryAxis": {
    "gridPosition": "start",
    "labelRotation": 45
  },
  "export": {
    "enabled": true
  }

});



  }
}

export default HomeController;
