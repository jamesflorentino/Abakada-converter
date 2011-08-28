$(document).ready ->
		
	class TranslatorModel extends Backbone.Model
		defaults:
			dictionary: {}
		
		initialize: () ->
			@setDictionary()

		setDictionary: () ->
			@set dictionary:
				'a':  'anito'
				'b':  'bathala'
				'c':  'chorva'
				'd':  'diwata'
				'e':  'engkanto'
				'f':  'florante'
				'g':  'ganda'
				'h':  'halimaw'
				'i':  'ita'
				'j':  'jose'
				'k':  'kapre'
				'l':  'lam-ang'
				'm':  'manananggal'
				'n':  'nipa'
				'o':  'otap'
				'p':  'papaitan'
				'q':  'quezon'
				'r':  'rajah'
				's':  'sitio'
				't':  'tuba'
				'u':  'unggoy'
				'v':  'vinzon'
				'w':  'waray'
				'x':  'xerex'
				'y':  'yakal'
				'z':  'zamora'

		getPhonetics: (x) ->
			if @get('dictionary')[x] then @get('dictionary')[x] else x
			
	class TranslatorView extends Backbone.View
		
		el: $("content")
		
		events:
			'keyup textarea#textinput': 'translate'
		
		translate: () ->
			txt_in = $("#textinput")
			txt_out = $("#textoutput")
			str = txt_in.val()
			total = str.length
			str_out = ''
			i = 0
			while i++ < total
				str_out += @model.getPhonetics(str.substr(i-1, 1).toLowerCase()) + ' '
			txt_out.val str_out

		initialize: () ->
			@model = new TranslatorModel
			$('#textoutput').attr disabled:'disabled'
			@translate()
		render: () ->

	app = new TranslatorView
	#$('container').autoalign('center middle')
