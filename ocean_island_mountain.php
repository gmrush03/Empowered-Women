<?php

$title = 'Empowered Women';

//Line 1
echo "<h1>$title</h1>";

//Line 2
echo "<p>Women have come a long way in fighting for equality and recognition, and now more than ever, they have earned the title of 'Empowered Women'. </p>";

//Line 3
$history_of_empowerment = array( 
		"First-wave feminism (1848 - 1920)" => "The focus of this wave was to advocate for the right to vote",
		"Second-wave feminism (1960s - 1980s)" => "The focus of this wave was to take a stand on gender roles and social norms",
		"Third-wave feminism (1990s - present)" => "The focus of this wave is to challenge all forms of oppression and discrimination in society."
);

//Line 4
echo "<h2>History of Empowerment</h2>";

//Line 5
foreach($history_of_empowerment as $wave => $focus){ 
	echo "<p><strong>$wave</strong>: $focus</p>";
}

//Line 6
$women_leaders = array( 
		"Rosa Parks" => "Civil rights activist",
		"Marie Curie" => "Physicist and chemist",
		"Susan B. Anthony" => "Women's rights activist"
);

//Line 7
echo "<h2>Women Leaders</h2>";

//Line 8
foreach($women_leaders as $name => $accomplishment){ 
	echo "<p><strong>$name</strong>: $accomplishment</p>";
}

//Line 9
$quotes = array(
		"The most common way people give up their power is by thinking they don't have any. - Alice Walker",
		"You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are. - Maya Angelou",
		"No one can make you feel inferior without your consent. - Eleanor Roosevelt"
);

//Line 10
echo "<h2>Quotes</h2>";

//Line 11
foreach($quotes as $quote){ 
	echo "<p>$quote</p>";
}

//Line 12
echo "<p>As we look to the future, it is important to continue to celebrate and empower women, especially those who are doing remarkable things in the world. </p>";

//Line 13
$current_empowerment_initiatives = array(
		"The Malala Fund" => "Founded by Nobel Peace Prize winner Malala Yousafzai, the Malala Fund supports girls' education in developing countries.",
		"Women Who Code" => "This global organization provides resources and support for women seeking to break into tech careers.",
		"Girls Who Code" => "This group uses coding and robotics to inspire young girls to pursue careers in computer science and technology."
);

//Line 14
echo "<h2>Current Empowerment Initiatives</h2>";

//Line 15
foreach($current_empowerment_initiatives as $initiative => $description){ 
	echo "<p><strong>$initiative</strong>: $description</p>";
}

//Line 16
echo "<p>These initiatives are just a few of the ways in which women are being empowered to make a difference in the world. </p>";

//Line 17
echo "<p>We can all take steps to ensure that we are continuing to empower women by being conscious of the language that we use, being aware of gender biases, and celebrating the accomplishments of women.</p>";

//Line 18
echo "<h3>How can you help empower women?</h3>";

//Line 19
echo "<p>Here are a few ideas: </p>";

//Line 20
$ways_to_empower = array(
		"Support organizations that focus on improving women's rights and equality",
		"Volunteer and/or donate to women's shelters and other causes that support women",
		"Speak out against gender bias and discrimination",
		"Encourage young girls to pursue their dreams and be ambitious",
		"Listen to the stories of women and promote their achievements"
);

//Line 21
foreach($ways_to_empower as $way){ 
	echo "<p>$way</p>";
}

//Line 22
echo "<p>These are just a few of the ways that you can help empower women. Each of us can make a difference in the lives of women, one small step at a time. </p>";

//Line 23
echo "<p>Let us continue to support and empower women so that we can create a better world for all. </p>";

?>