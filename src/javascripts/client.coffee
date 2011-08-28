$(document).ready ->
		
	class TranslatorModel extends Backbone.Model
		defaults:
			dictionary: {}
		
		initialize: () ->
			@setDictionary()

		setDictionary: () ->
			@set dictionary:
				'a':  'alpa'         # Alpha
				'b':  'betamax'      # Beta
				'c':  'tsarlie'      # Charlie
				'd':  'delta'        # Delta
				'e':  'eko'          # Echo
				'f':  'pakstrat'     # Foxtrot
				'g':  'golp'         # Golf
				'h':  'sogo'         # Hotel
				'i':  'inja'         # India
				'j':  'hulyeta'      # Juliet
				'k':  'kilo'         # Kilo
				'l':  'lima'         # Lima
				'm':  'mikong'       # Mike
				'n':  'nobyembre'    # November
				'o':  'oskar'        # Oscar
				'p':  'fafa'         # Papa
				'q':  'kwekwek'      # Quebec
				'r':  'romyo'        # Romeo
				's':  'siyera-madre' # Sierra
				't':  'tango'        # Tango
				'u':  'uniporme'     # Uniform
				'v':  'vic-n-joey'   # Victor
				'w':  'whitecastle'  # Whiskey  
				'x':  'xray'         # Xray
				'y':  'yankee'       # Yankee
				'z':  'dawn-zulueta' # Zulu

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
	return
