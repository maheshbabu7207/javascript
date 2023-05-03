var hor=0;
var ver=0;
function right()
{
    hor++
    document.getElementById("snk").style.left=`$(hor)%`
    document.getElementById("snk").style.rotate="0deg"
}
function left()
{
    hor--
    document.getElementById("snk").style.left=`$(hor)%`
    document.getElementById("snk").style.rotate="180deg"
}
function up()
{
    ver++
    document.getElementById("snk").style.bottom=`$(ver*10)px`
    document.getElementById("snk").style.rotate="-90deg"
}
function left()
{
    ver--
    document.getElementById("snk").style.bottom=`$(ver*10)px`
    document.getElementById("snk").style.rotate="90deg"
}