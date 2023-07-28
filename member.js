function skillsMember() {
    var skills = ["HTML", "CSS", "JS", "PHP", "Python"];
    var member = {
        name: "John",
        age: 30,
        skills: skills
    };
    console.log(member.skills[2]);
    console.log(member.skills.length);
    console.log(member.skills[member.skills.length - 1]);
    console.log(member.skills.indexOf("PHP"));
    console.log(member.skills.indexOf("C#"));
    console.log(member.skills[member.skills.indexOf("JS")]);
    console.log(member.skills[member.skills.indexOf("JS") + 1]);
    console.log(member.skills[member.skills.indexOf("JS") - 1]);
    console.log(member.skills[member.skills.indexOf("JS") + 2]);
    console.log(member.skills[member.skills.indexOf("JS") - 2]);
    console.log(member.skills[member.skills.indexOf("JS") + 3]);
    console.log(member.skills[member.skills.indexOf("JS") - 3]);
    console.log(member.skills[member.skills.indexOf("JS") + 4]);
    console.log(member.skills[member.skills.indexOf("JS") - 4]);
    console.log(member.skills[member.skills.indexOf("JS") + 5]);
    console.log(member.skills[member.skills.indexOf("JS") - 5]);
}