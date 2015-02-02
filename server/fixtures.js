Posts.remove({});


if(Posts.find().count() == 0){
	Posts.insert({
		titel: 'Fixa parkbänk',
		nofComplaints: 1,
		img:"8YcvzboD5r5SsLP68",
		lat:57.707876,
		lon:11.935942,
		progress:1,
		rapport:"Trasig parkbänk vid Lindholmsallén. Behöver ny sittbräda.",
		mottagen:"Ej mottagen.",
		atgardforslag: "Inget åtgärdsförslag finns.",
		atgardpoborjad: "Ingen åtgärd påbörjad.",
		atgardgenomford: "Ingen åtgärd genomförd."
	});
	Posts.insert({
		titel: 'Potthål',
		img:"zwEoqy2vA3jHjzAXG",
		nofComplaints: 5,
		lat:57.713091,
		lon:11.908427,
		progress:2,
		rapport:"Potthål i väg vid Eketrägatan. Ny beläggning behövs.",
		mottagen:"Mottagen av trafikverket.",
		atgardforslag: "Inget åtgärdsförslag finns.",
		atgardpoborjad: "Ingen åtgärd påbörjad.",
		atgardgenomford: "Ingen åtgärd genomförd."
	});
	Posts.insert({
		titel: 'Bygg grafittivägg',
		img:"7CpDTiqpR6q8wFWFx",
		nofComplaints: 10,
		lat:57.719488,
		lon:11.950062,
		progress:3,
		rapport:"En dedikerad grafittivägg behövs vid Backaplan för att förhindra ytterligare grafitti på byggnader i området.",
		mottagen:"Mottagen av Göteborgs stads stadsförvaltning",
		atgardforslag: "Bygga en dedikerad grafittivägg vid ",
		atgardpoborjad: "Ingen åtgärd påbörjad.",
		atgardgenomford: "Ingen åtgärd genomförd."
	});
	Posts.insert({
		titel: 'Flytta cykelbana',
		img:"7qwRYAbiuWFZXzgTi",
		nofComplaints: 20,
		lat:57.715360,
		lon:12.027783,
		progress:4,
		rapport:"Flytta cykelbana i Kålltorp. Den går mot enkelriktad gata.",
		mottagen:"Mottagen av trafikkontoret.",
		atgardforslag: "Ta bort ritad pil. Åtgärd klar 2014-04-01.",
		atgardpoborjad: "Åtgärd påbörjad, slipning av pil.",
		atgardgenomford: "Ingen åtgärd genomförd."
	});
	Posts.insert({
		titel: 'Trasig lyktstolpe vid Röda sten.',
		nofComplaints: 32, 
		img:"NqAgRnCFpNeYsPYrQ",
		lat:57.688040,
		lon:11.906285,
		progress:5,
		rapport:"Lampa i lyktstolpe trasig ",
		mottagen:"Mottagen av stadsförvaltningen.",
		atgardforslag: "Byte av lampa.",
		atgardpoborjad: "Lampa inköpt 2014-12-01.",
		atgardgenomford: "Lampa bytt 2014-12-12."
	});
	Posts.insert({
		titel: 'Starta matmarknad.',
		nofComplaints: 64, 
		img:"pvM6KaLLzF6f2YFYW",
		lat:57.688040,
		lon:11.906285,
		progress:2,
		rapport:"Vi startar en matmarknad i Majorna i vår! ",
		mottagen:"Jag startar en facebookgrupp och börjar värva medlemmar. Den heter ''Mat i Maj''",
		atgardforslag: "",
		atgardpoborjad: "",
		atgardgenomford: ""
	});
}
