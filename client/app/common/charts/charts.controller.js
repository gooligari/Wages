class ChartsController {
  constructor() {
    this.name = 'Charts';

    function myFunction() {
    alert("I am an alert box!");
}

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



var chart = AmCharts.makeChart( "chartdiv", {
    "type": "gantt",
    "theme": "light",
    "marginRight": 70,
    "period": "hh",
    "dataDateFormat":"YYYY-MM-DD",
    "balloonDateFormat": "JJ:NN",
    "columnWidth": 0.5,
    "valueAxis": {
        "type": "date"
    },
    "brightnessStep": 10,
    "graph": {
        "fillAlphas": 1,
        "balloonText": "<b>[[task]]</b>: [[open]] [[value]]"
    },
    "rotate": true,
    "categoryField": "category",
    "segmentsField": "segments",
    "colorField": "color",
    "startDate": "2015-01-01",
    "startField": "start",
    "endField": "end",
    "durationField": "duration",
    "dataProvider": [ {
        "category": "John",
        "segments": [ {
            "start": 7,
            "duration": 2,
            "color": "#46615e",
            "task": "Task #1"
        }, {
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 2,
            "color": "#8dc49f",
            "task": "Task #3"
        } ]
    }, {
        "category": "Smith",
        "segments": [ {
            "start": 10,
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 1,
            "color": "#8dc49f",
            "task": "Task #3"
        }, {
            "duration": 4,
            "color": "#46615e",
            "task": "Task #1"
        } ]
    }, {
        "category": "Ben",
        "segments": [ {
            "start": 12,
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "start": 16,
            "duration": 2,
            "color": "#FFE4C4",
            "task": "Task #4"
        } ]
    }, {
        "category": "Mike",
        "segments": [ {
            "start": 9,
            "duration": 6,
            "color": "#46615e",
            "task": "Task #1"
        }, {
            "duration": 4,
            "color": "#727d6f",
            "task": "Task #2"
        } ]
    }, {
        "category": "Lenny",
        "segments": [ {
            "start": 8,
            "duration": 1,
            "color": "#8dc49f",
            "task": "Task #3"
        }, {
            "duration": 4,
            "color": "#46615e",
            "task": "Task #1"
        } ]
    }, {
        "category": "Scott",
        "segments": [ {
            "start": 15,
            "duration": 3,
            "color": "#727d6f",
            "task": "Task #2"
        } ]
    }, {
        "category": "Julia",
        "segments": [ {
            "start": 9,
            "duration": 2,
            "color": "#46615e",
            "task": "Task #1"
        }, {
            "duration": 1,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 8,
            "color": "#8dc49f",
            "task": "Task #3"
        } ]
    }, {
        "category": "Bob",
        "segments": [ {
            "start": 9,
            "duration": 8,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 7,
            "color": "#8dc49f",
            "task": "Task #3"
        } ]
    }, {
        "category": "Kendra",
        "segments": [ {
            "start": 11,
            "duration": 8,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "start": 16,
            "duration": 2,
            "color": "#FFE4C4",
            "task": "Task #4"
        } ]
    }, {
        "category": "Tom",
        "segments": [ {
            "start": 9,
            "duration": 4,
            "color": "#46615e",
            "task": "Task #1"
        }, {
            "duration": 3,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 5,
            "color": "#8dc49f",
            "task": "Task #3"
        } ]
    }, {
        "category": "Kyle",
        "segments": [ {
            "start": 6,
            "duration": 3,
            "color": "#727d6f",
            "task": "Task #2"
        } ]
    }, {
        "category": "Anita",
        "segments": [ {
            "start": 12,
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "start": 16,
            "duration": 2,
            "color": "#FFE4C4",
            "task": "Task #4"
        } ]
    }, {
        "category": "Jack",
        "segments": [ {
            "start": 8,
            "duration": 10,
            "color": "#46615e",
            "task": "Task #1"
        }, {
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        } ]
    }, {
        "category": "Kim",
        "segments": [ {
            "start": 12,
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 3,
            "color": "#8dc49f",
            "task": "Task #3"
        } ]
    }, {
        "category": "Aaron",
        "segments": [ {
            "start": 18,
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 2,
            "color": "#FFE4C4",
            "task": "Task #4"
        } ]
    }, {
        "category": "Alan",
        "segments": [ {
            "start": 17,
            "duration": 2,
            "color": "#46615e",
            "task": "Task #1"
        }, {
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 2,
            "color": "#8dc49f",
            "task": "Task #3"
        } ]
    }, {
        "category": "Ruth",
        "segments": [ {
            "start": 13,
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 1,
            "color": "#8dc49f",
            "task": "Task #3"
        }, {
            "duration": 4,
            "color": "#46615e",
            "task": "Task #1"
        } ]
    }, {
        "category": "Simon",
        "segments": [ {
            "start": 10,
            "duration": 3,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "start": 17,
            "duration": 4,
            "color": "#FFE4C4",
            "task": "Task #4"
        } ]
    } ],
    "valueScrollbar": {
        "autoGridCount":true
    },
    "chartCursor": {
        "cursorColor":"#55bb76",
        "valueBalloonsEnabled": false,
        "cursorAlpha": 0,
        "valueLineAlpha":0.5,
        "valueLineBalloonEnabled": true,
        "valueLineEnabled": true,
        "zoomable":false,
        "valueZoomable":true
    },
    "export": {
        "enabled": true
     }
} );





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

export default ChartsController;
