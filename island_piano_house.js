//1
let WomenEmpowerment = "Empowered Women Empower Women";

//2
const WOMEN_ROLE = {
		mothers: "caregivers",
		sisters: "friends",
		wives: "partners",
		daughters: "heirs"
};

//3
const INSPIRING_QUOTES = [
	"A woman is like a tea bag - you can't tell how strong she is until you put her in hot water.”- Eleanor Roosevelt", 
	"Women are the real architects of society.” - Harriet Beecher Stowe",
	"The best protection any woman can have ... is courage.” - Elizabeth Cady Stanton",
  	"A woman with a voice is, by definition, a strong woman.” - Melinda Gates"
];

//4
function empowerWomen(){
	for(let key in WOMEN_ROLE){
		console.log(`${key}: ${WOMEN_ROLE[key]}`);
	}
	
	for(let quote of INSPIRING_QUOTES){
		console.log(quote);
	}
}

//5
empowerWomen();

//6
const WOMEN_RIGHTS = ["Education", "Health Care", "Equal Pay", "Ownership Rights", "Safety"];

//7
function listWomenRights(){
	for(let right of WOMEN_RIGHTS){
		console.log(right);
	}
}

//8
listWomenRights();

//9
const WOMEN_ORGANIZATIONS = [
	{
		name: "She Should Run",
		mission: "She Should Run encourages women and girls to aspire to leadership positions in government and public life." 
	}, 
	{
		name: "Lean In", 
		mission: "Lean In is an organizations dedicated to giving women the confidence and community to help each other achieve their ambitions."
	}
];

//10
function listWomenOrganizations(){
	for(let org of WOMEN_ORGANIZATIONS){
		console.log(`Name: ${org.name}, Mission: ${org.mission}`);	
	}
}

//11
listWomenOrganizations();

//12
const WOMEN_STORIES = [
	{
		name: "Greta Thunberg", 
		story: "Leading the fight against climate change at the young age of 16."
	}, 
	{
		name: "Malala Yousafzai", 
		story: "A young woman working to ensure the right of every girl to receive 12 years of free, quality education."
	}, 
	{
		name: "Rosa Parks", 
		story: "An activist who refused to give up her seat on the bus and sparked the civil rights movement."
	}
];

//13
function listWomenStories(){
	for(let story of WOMEN_STORIES){
		console.log(`Name: ${story.name}, Story: ${story.story}`);	
	}
}

//14
listWomenStories();

//15
const WOMEN_LEADERS = [
	{
		name: "Theresa May", 
		country: "United Kingdom"
	}, 
	{
		name: "Angela Merkel", 
		country: "Germany"
	}, 
	{
		name: "Erna Solberg", 
		country: "Norway"
	}
];

//16
function listWomenLeaders(){
	for(let leader of WOMEN_LEADERS){
		console.log(`Name: ${leader.name}, Country: ${leader.country}`);	
	}
}

//17
listWomenLeaders();

//18
const WOMEN_CONFERENCES = [
	{
		name: "TEDWomen", 
		location: "San Francisco, United States"
	}, 
	{
		name: "Women in the World Summit", 
		location: "New York, United States"
	}, 
	{
		name: "Women in the Law Conference", 
		location: "London, United Kingdom"
	}
];

//19
function listWomenConferences(){
	for(let conf of WOMEN_CONFERENCES){
		console.log(`Name: ${conf.name}, Location: ${conf.location}`);	
	}
}

//20
listWomenConferences();

//21
let WomenPower = (WomenEmpowerment, WOMEN_ROLE, INSPIRING_QUOTES, WOMEN_RIGHTS, WOMEN_ORGANIZATIONS,
				WOMEN_STORIES, WOMEN_LEADERS, WOMEN_CONFERENCES) => {
	
	empowerWomen();
	listWomenRights();
	listWomenOrganizations();
	listWomenStories();
	listWomenLeaders();
	listWomenConferences();
	
	console.log(WomenEmpowerment);
};

//22
WomenPower(WomenEmpowerment, WOMEN_ROLE, INSPIRING_QUOTES, WOMEN_RIGHTS, WOMEN_ORGANIZATIONS,
				WOMEN_STORIES, WOMEN_LEADERS, WOMEN_CONFERENCES);

//23
function convertToEqualRights(){
	let rightsArr = [];
	for(let right of WOMEN_RIGHTS){
		rightsArr.push(`Women's Right to ${right}`);
	}
	
	return rightsArr;
}

//24
let rightsArr = convertToEqualRights();

//25
console.log(rightsArr);

//26
let empowermentArr = INSPIRING_QUOTES.map(quote => `"${quote}" - Empowering Women`);

//27
console.log(empowermentArr);

//28
let orgObjects = WOMEN_ORGANIZATIONS.map(org => {
	return {name: org.name, slogan: `Empowering Women with ${org.name}`};
});

//29
console.log(orgObjects);

//30
let storyObjects = WOMEN_STORIES.map(story => {
	return {name: story.name, quote: `"${story.name} is an example of an empowered woman."`};
});

//31
console.log(storyObjects);

//32
let leadersObjects = WOMEN_LEADERS.map(leader => {
	return {name: leader.name, slogan: `Women Empowerment with ${leader.name}`};
});

//33
console.log(leadersObjects);

//34
let conferencesObjects = WOMEN_CONFERENCES.map(conf => {
	return {name: conf.name, quote: `"${conf.name} is an example of an empowered women."`};
});
 
//35
console.log(conferencesObjects);

//36
function essayOnEmpowerment(){
	let essay = `Empowerment of women means empowering half of the world's population. Women are just as capable and intelligent as men, yet they are often subject to inequality and injustice in many parts of the world. It is essential to recognize the essential role of women in society and ensure their rights to education, health care, equal pay and ownership rights. 

In order to empower women, it is important to recognize and promote inspiring women leaders such as Theresa May, Angela Merkel and Erna Solberg in national and international platforms. Additionally, women should be encouraged to attend conferences such as TEDWomen, Women in the World Summit and Women in the Law Conference. By attending these conferences, women can network with like-minded individuals and gain the courage and confidence to become successful leaders. 

Furthermore, it is important to highlight stories of successful women such as Greta Thunberg, Malala Yousafzai and Rosa Parks. These stories serve as powerful examples of empowered women who have faced obstacles and overcome them. They provide an inspiration to other women to stand up for their rights and fight against injustice. 

Finally, organizations like She Should Run and Lean In are instrumental in giving women the confidence and community to help each other achieve their ambitions. Additionally, it is important to create a supportive environment which promotes quotes such as, 'A woman is like a tea bag - you can't tell how strong she is until you put her in hot water.' 

In conclusion, it is essential to recognize the vital role of women in society and to empower them. By providing equal rights, education and access to health care, women can be empowered to become successful leaders. Furthermore, organizations, inspiring stories and conferences are essential in giving women the confidence, community and information they need to become empowered individuals.`;
	
	return essay;
}

//37
let empowermentEssay = essayOnEmpowerment();

//38
console.log(empowermentEssay);

//39
let finalResult = {
	WomenEmpowerment,
	WOMEN_ROLE,
	INSPIRING_QUOTES,
	WOMEN_RIGHTS,
	WOMEN_ORGANIZATIONS,
	WOMEN_STORIES,
	WOMEN_LEADERS,
	WOMEN_CONFERENCES,
	empowermentEssay,
	rightsArr,
	empowermentArr,
	orgObjects,
	storyObjects,
	leadersObjects,
	conferencesObjects
};

//40
console.log(finalResult);

//41
let pushToApi = (url, body) => {
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'content-type': 'application/json'
		}
	})
	.then(res => res.json())
	.then(data => {
		console.log(data);
	});
};

//42
pushToApi('https://api.mydomain.com/empowerment', finalResult);

//43
function drawEmpowerment(){
	let canvas = document.getElementById('empowerment');
	let ctx = canvas.getContext('2d');
	
	//draw circle
	ctx.beginPath();
	ctx.arc(100, 100, 90, 0, Math.PI * 2);
	ctx.fillStyle = '#FF0000';
	ctx.fill();
	ctx.stroke();
	
	//write text
	ctx.font = '40px sans-serif';
	ctx.fillStyle = '#FFFFFF';
	ctx.textAlign = 'center';
	ctx.fillText('EMPOWERED WOMEN', 100, 115);
}

//44
drawEmpowerment();

//45
function tweetEmpowerment(){
	let tweet = `Empowering Women with #EmpoweredWomen! ${WomenEmpowerment}`;
	
	window.open(`https://twitter.com/intent/tweet?text=${tweet}`);
}

//46
tweetEmpowerment();

//47
function createEmpowermentEvent(date, location){
	let event = {
		date,
		location,
		topic: 'Empowerment of Women',
		agenda: [
			{time: '9:00am', topic: 'Welcome and Introduction'},
			{time: '9:30am', topic: 'Women Leaders in Action'},
			{time: '10:30am', topic: 'Break'},
			{time: '11:00am', topic: 'Women Empowerment in the Workplace'},
			{time: '12:00pm', topic: 'Lunch'},
			{time: '1:00pm', topic: 'Promoting Women in Politics'},
			{time: '2:00pm', topic: 'Break'},
			{time: '2:30pm', topic: 'Creating a Supportive Network for Women'},
			{time: '3:30pm', topic: 'Closing and Action Items'}
		]
	};
	
	return event;
}

//48
let empowermentEvent = createEmpowermentEvent('April 26, 2020', 'Los Angeles, CA');

//49
console.log(empowermentEvent);

//50
function saveEmpowermentEvent(){
	let url = 'https://api.mydomain.com/empowermentEvent';
	
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(empowermentEvent),
		headers: {
			'content-type': 'application/json'
		}
	})
	.then(res => res.json())
	.then(data => {
		console.log(data);
	});
}

//51
saveEmpowermentEvent();