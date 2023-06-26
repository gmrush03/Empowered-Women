#include <iostream>
#include <string>

// Create a function to print out a message, showing support for women 
void printMessage(){
    std::cout << "Empowering women is essential for the progression of society. Everyone should support one another and encourage everyone to reach their potential!" << std::endl;
}

// Create a function to get a person's name 
std::string getPersonName(){
    std::string name;
    std::cout << "Enter a name: ";
    std::cin >> name; 
    return name; 
}

// Create a function to greet a person 
void greetPerson(std::string name){
    std::cout << "Hello " << name << ", it's great to have you here!" << std::endl; 
}

// Create a function to get a person's age
int getPersonAge(){
    int age;
    std::cout << "Enter your age: ";
    std::cin >> age; 
    return age;
}

// Create a function to prove a point about the importance of education 
void pointAboutEducation(int age){
    std::cout << "At your age of " << age << ", you still have time to pursue an education. Education is the key to success, and to open so many doors." << std::endl;
}

// Create a function to encourage a person
void encouragePerson(){
    std::cout << "Never give up! You have the strength and the power to make your dreams come true." << std::endl;
}

int main()
{
    printMessage();
    // Get the person's name 
    std::string name = getPersonName();
    // Greet the person
    greetPerson(name);
    // Get the person's age
    int age = getPersonAge();
    // Make a point about the importance of education 
    pointAboutEducation(age);
    // Encourage the person 
    encouragePerson();

    return 0;
}