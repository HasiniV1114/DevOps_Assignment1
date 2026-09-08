const form=document.getElementById("Validation Form");
form.addEventListener("submit",function(event)
{
event.preventDefault();
const Name=document.getElementById("Name").value;
const Email=document.getElementById("Email").value;
const SelectedEvent=document.getElementById("Event").value;

    alert("Thank you! " + Name + "! You have registered for the " + SelectedEvent
        + " category.\nConfirmation sent to: " + Email);
}
);