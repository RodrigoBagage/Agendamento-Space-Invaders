var now = new Date();
if (now.getHours() > 0 && now.getHours() < 12)
{document.write ( now.getHours() + " AM" ) }
else if (now.getHours() > 12)
{document.write ( Math.floor ( now.getHours() - 12 ) + " PM") }
