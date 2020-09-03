let gallery = document.getElementById('gallery')

let pics = [ "Udaipur", "Nainital", "Dehradoon", "Mussoorie",
			"Dargah", "Humayun Tomb", "Mughal Garden", "India Gate",
			"Hauz Khas", "Select City Walk", "Bangla Saheb", "Water Park",
			"Lodhi Garden", "Safdarjung Tomb", "Purana Quila", "Qutb Minar" ]

let unit = (pics.length - pics.length % 4)/4
let htm = ""
for (let x=0; x<4; x++) {
	htm += "<div class='galleryStripWrapper'>\n<div class='galleryStrip "
		 if(x==0) htm += "one"
	else if(x==1) htm += "two"
	else if(x==2) htm += "three"
	else if(x==3) htm += "four"
	htm += "'>"
	for (let i=0; i<unit; i++) {
		htm += "<div class='photo'>\n<div class='photoImage'><img src='assets/img/"
		htm += pics[x * unit + i]
		htm += ".jpg'/></div>\n<div class='photoName'>"
		htm += pics[x * unit + i]
		htm += "</div>\n</div>"
	}
	htm += "</div>\n</div>"

	gallery.innerHTML = htm
}
