const form=document.getElementById("Validation Form");
form.addEventListener("submit",function(event)
{
event.preventDefault();
const Name=document.getElementById("Name").Value;
const Email=document.getElementById("Email").Value;
const Age=document.getElementById("Age").Value;
const Genser=document.getElementById("Gender").Value;
const SelectedEvent=document.getElementById("Event").Value;
text="";
if(isNaN(Age)|| Age<18)
{
    alert("not eligibe for addmission");
}
else if(SelectedEvent=="Reserved"||Gemder!="Female")
{
    alert("Not eligible! You are a male");
}
else{
    alert("Thank you!"+Name+"! you have selected under "+SelectedEvent+" Category"+"\n configuration sent to: "+Email);
}
});