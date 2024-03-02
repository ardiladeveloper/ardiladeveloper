let application_id = new URLSearchParams(window.location.search).get('application_id');
let user = new URLSearchParams(window.location.search).get('user');

let xhr = new XMLHttpRequest();
let url = new URL('http://localhost:8080/job_applications.php');
url.searchParams.set('application_id',application_id);
url.searchParams.set('user',user);
xhr.open('GET', url);
xhr.responseType = "json";

xhr.onload = (event) =>{
var buf = xhr.response;
let com = document.getElementById("company");
let com_link = document.createElement("a");
com_link.setAttribute("href",buf["link"]);
com_link.append(buf["company"]);
com.append(com_link);

let pos = document.getElementById("position");
pos.append(buf["position"]);

let dat = document.getElementById("date");
dat.append(buf["due_date"]);

let sal = document.getElementById("salutation");
sal.append("M. Sc. ");

let lastname = document.getElementById("lastname");
lastname.append("Ardila Bernal"+", ");

let firstname = document.getElementById("firstname");
firstname.append("Pablo Andres");

let notes = document.getElementById("notes");
notes.value = buf["notes"];

let front_cover = JSON.parse(buf["front_cover"]);
let sft_skill1 = document.getElementById("soft_skill_1");
sft_skill1.append(front_cover["soft_skills"][0]);

let sft_skill2 = document.getElementById("soft_skill_2");
sft_skill2.append(front_cover["soft_skills"][1]);

let sft_skill3 = document.getElementById("soft_skill_3");
sft_skill3.append(front_cover["soft_skills"][2]);

let tch_skill1 = document.getElementById("tech_skill_1");
tch_skill1.append(front_cover["technical_skills"][0]);

let tch_skill2 = document.getElementById("tech_skill_2");
tch_skill2.append(front_cover["technical_skills"][1]);

let tch_skill3 = document.getElementById("tech_skill_3");
tch_skill3.append(front_cover["technical_skills"][2]);
  
let cover_letter = JSON.parse(buf["cover_letter"]);
let add_name = document.getElementById("add_name");
add_name.value = cover_letter["add_name"];

let add_department = document.getElementById("add_department");
add_department.value = cover_letter["add_department"];

let add_company = document.getElementById("add_company");
add_company.value = cover_letter["add_company"];

let add_address = document.getElementById("add_address");
add_address.value = cover_letter["add_address"];

let subject = document.getElementById("subject");
subject.value = cover_letter["subject"];

let letter = document.getElementById("letter");
letter.value = cover_letter["letter"];

let curriculum_vitae = JSON.parse(buf["cur_vitae"]); 
let exp_counter = 0;
let experience = curriculum_vitae["experience"];

for(;exp_counter<experience.length;exp_counter++){
if(exp_counter>0) add_exp();
let exp_from1 = document.getElementById("exp_from_"+exp_counter);
exp_from1.value = experience[exp_counter]["from"];

let exp_to1 = document.getElementById("exp_to_"+exp_counter);
exp_to1.value = experience[exp_counter]["to"];

let exp_pos1 = document.getElementById("exp_pos_"+exp_counter);
exp_pos1.value = experience[exp_counter]["position"];

let exp_com1 = document.getElementById("exp_com_"+exp_counter);
exp_com1.value = experience[exp_counter]["company"];

let exp_ctr1 = document.getElementById("exp_ctr_"+exp_counter);
exp_ctr1.value = experience[exp_counter]["country"];

let ach_counter = 0;
for( ; ach_counter < experience[exp_counter]["achievements"].length ; ach_counter++ ){
if(ach_counter > 0 )  load_ach(ach_counter);
//"exp_ach_"+exp_counter+'_'+ach_counter;
let exp_ach1 = document.getElementById("exp_ach_"+exp_counter+'_'+ach_counter);
exp_ach1.value = experience[exp_counter]["achievements"][ach_counter];
}
}

let education = curriculum_vitae["education"];
let edu_counter = 0;
let edu_table = document.getElementById("education");
for(;edu_counter<education.length;edu_counter++){
if(edu_counter>0) add_edu();
edu_table.children[edu_table.children.length-1].children[0].children[0].children[0].value = education[edu_counter]["from"];
edu_table.children[edu_table.children.length-1].children[0].children[1].children[0].value = education[edu_counter]["to"];
edu_table.children[edu_table.children.length-1].children[0].children[2].children[0].value = education[edu_counter]["title"];
edu_table.children[edu_table.children.length-1].children[0].children[3].children[0].value = education[edu_counter]["university"];
edu_table.children[edu_table.children.length-1].children[0].children[4].children[0].value = education[edu_counter]["country"];
} 

let awards = curriculum_vitae["awards"];
let awards_counter = 0;
let awards_table = document.getElementById("awards");

for(;awards_counter < awards.length ; awards_counter++){
if(awards_counter>0) add_award();
awards_table.children[awards_table.children.length-1].children[0].children[0].children[0].value = awards[awards_counter]["from"];
awards_table.children[awards_table.children.length-1].children[0].children[1].children[0].value = awards[awards_counter]["to"];
awards_table.children[awards_table.children.length-1].children[0].children[2].children[0].value = awards[awards_counter]["award"];

}


let lang1 = document.getElementById("lang_1");
lang1.value = curriculum_vitae["languages"][0]["language"];

let lang_level1 = document.getElementById("lang_level_1");
lang_level1.value = curriculum_vitae["languages"][0]["level"];

let lang2 = document.getElementById("lang_2");
lang2.value = curriculum_vitae["languages"][1]["language"];

let lang_level2 = document.getElementById("lang_level_2");
lang_level2.value = curriculum_vitae["languages"][1]["level"];

let lang3 = document.getElementById("lang_3");
lang3.value = curriculum_vitae["languages"][2]["language"];

let lang_level3 = document.getElementById("lang_level_3");
lang_level3.value = curriculum_vitae["languages"][2]["level"];

let prog = document.getElementById("programming");
prog.value = curriculum_vitae["programming"];

let ofc = document.getElementById("office");
ofc.value = curriculum_vitae["office"];

let oth = document.getElementById("others");
oth.value = curriculum_vitae["others"];

let courses = curriculum_vitae["courses"];
let courses_counter = 0;
let courses_table = document.getElementById("courses");

for(;courses_counter < courses.length ; courses_counter++){
if(courses_counter>0) add_crs();
courses_table.children[courses_table.children.length-1].children[0].children[0].children[0].value = courses[courses_counter]["from"];
courses_table.children[courses_table.children.length-1].children[0].children[1].children[0].value = courses[courses_counter]["to"];
courses_table.children[courses_table.children.length-1].children[0].children[2].children[0].value = courses[courses_counter]["title"];
courses_table.children[courses_table.children.length-1].children[0].children[3].children[0].value = courses[courses_counter]["institution"];
courses_table.children[courses_table.children.length-1].children[0].children[4].children[0].value = courses[courses_counter]["country"];
}

let abroad = curriculum_vitae["abroad"];
let abroad_counter = 0;
let abroad_table = document.getElementById("abroad");

for( ; abroad_counter < abroad.length ; abroad_counter++){
if(abroad_counter>0) add_place();
abroad_table.children[abroad_table.children.length-1].children[0].children[0].children[0].value = abroad[abroad_counter]["from"];
abroad_table.children[abroad_table.children.length-1].children[0].children[1].children[0].value = abroad[abroad_counter]["to"];
abroad_table.children[abroad_table.children.length-1].children[0].children[2].children[0].value = abroad[abroad_counter]["place"];
}

}


window.addEventListener( "load", function (event){
xhr.send();
document.getElementById("user").value = user;
document.getElementById("application_id").value = application_id;
document.getElementById("ach_button").addEventListener("click", add_ach);

let pdf_user = document.getElementById("pdf_user");
pdf_user.value = user;
let pdf_application_id = document.getElementById("pdf_application_id");
pdf_application_id.value = application_id;
});


function add_exp(){
let table = document.getElementById("experience");
let new_exp = table.children[1].cloneNode(true);
new_exp.children[1].children[0].children[0].addEventListener("click", add_ach);

let tempo = new_exp.children[2].children[1].children[0].id;
let new_i = table.children.length-1;

tempo = tempo.slice(0,-3)+ new_i + tempo.slice(-2);

new_exp.children[2].children[1].children[0].id=tempo;

tempo = new_exp.children[2].children[1].children[0].name;
new_i = table.children.length-1;

tempo = tempo.slice(0,-4)+ new_i + tempo.slice(-3);

new_exp.children[2].children[1].children[0].name=tempo;

while(new_exp.children.length>4){
  new_exp.children[4].remove();
}

for(let it of new_exp.children[0].children) it.children[0].id=it.children[0].id.slice(0,-1)+new_i;

table.append(new_exp);

} 

function add_ach(){
let table = document.getElementById("experience");
let body = this.parentNode.parentNode.parentNode;
let achievement = body.children[2].cloneNode(true); 
console.log(body.children.length-3);
achievement.children[1].children[0].id = achievement.children[1].children[0].id.slice(0,-1)+(body.children.length-3);
body.append(achievement);

}

function load_ach(ach_num){
let table = document.getElementById("experience");
let body = table.children[table.children.length-1];
let achievement = body.children[2].cloneNode(true);
achievement.children[1].children[0].id = achievement.children[1].children[0].id.slice(0,-1) + ach_num;
body.append(achievement);
return achievement;
}

function add_crs(){
document.getElementById("courses").append(document.getElementById("courses").children[1].cloneNode(true) );
}

function add_edu(){
document.getElementById("education").append( document.getElementById("education").children[1].cloneNode(true) );
}

function add_award(){
document.getElementById("awards").append( document.getElementById("awards").children[1].cloneNode(true) );
}

function add_place(){
document.getElementById("abroad").append( document.getElementById("abroad").children[1].cloneNode(true) );
}

function inc_ltr(){
  if( document.getElementById("include_cl").checked ){
    document.getElementById("cl_fs").hidden=false;
  }else document.getElementById("cl_fs").hidden=true;
}
