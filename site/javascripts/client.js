(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  $(document).ready(function() {
    var TranslatorModel, TranslatorView, app;
    TranslatorModel = (function() {
      __extends(TranslatorModel, Backbone.Model);
      function TranslatorModel() {
        TranslatorModel.__super__.constructor.apply(this, arguments);
      }
      TranslatorModel.prototype.defaults = {
        dictionary: {}
      };
      TranslatorModel.prototype.initialize = function() {
        return this.setDictionary();
      };
      TranslatorModel.prototype.setDictionary = function() {
        return this.set({
          dictionary: {
            'a': 'anito',
            'b': 'bathala',
            'c': 'chorva',
            'd': 'diwata',
            'e': 'engkanto',
            'f': 'florante',
            'g': 'ganda',
            'h': 'halimaw',
            'i': 'ita',
            'j': 'jose',
            'k': 'kapre',
            'l': 'lam-ang',
            'm': 'manananggal',
            'n': 'nipa',
            'o': 'otap',
            'p': 'papaitan',
            'q': 'quezon',
            'r': 'rajah',
            's': 'sitio',
            't': 'tuba',
            'u': 'unggoy',
            'v': 'vinzon',
            'w': 'waray',
            'x': 'xerex',
            'y': 'yakal',
            'z': 'zamora'
          }
        });
      };
      TranslatorModel.prototype.getPhonetics = function(x) {
        if (this.get('dictionary')[x]) {
          return this.get('dictionary')[x];
        } else {
          return x;
        }
      };
      return TranslatorModel;
    })();
    TranslatorView = (function() {
      __extends(TranslatorView, Backbone.View);
      function TranslatorView() {
        TranslatorView.__super__.constructor.apply(this, arguments);
      }
      TranslatorView.prototype.el = $("content");
      TranslatorView.prototype.events = {
        'keyup textarea#textinput': 'translate'
      };
      TranslatorView.prototype.translate = function() {
        var i, str, str_out, total, txt_in, txt_out;
        txt_in = $("#textinput");
        txt_out = $("#textoutput");
        str = txt_in.val();
        total = str.length;
        str_out = '';
        i = 0;
        while (i++ < total) {
          str_out += this.model.getPhonetics(str.substr(i - 1, 1).toLowerCase()) + ' ';
        }
        return txt_out.val(str_out);
      };
      TranslatorView.prototype.initialize = function() {
        this.model = new TranslatorModel;
        $('#textoutput').attr({
          disabled: 'disabled'
        });
        return this.translate();
      };
      TranslatorView.prototype.render = function() {};
      return TranslatorView;
    })();
    return app = new TranslatorView;
  });
}).call(this);
