//MARK: - Empowered Women
//1. import Foundation
import Foundation

//2. Create a class to represent a woman
class Woman {
    var name: String
    var occupation: String
    
    init(name: String, occupation: String) {
        self.name = name
        self.occupation = occupation
    }
}

//3. Create a protocol to define the minimum requirements
protocol EmpowermentRequirements {
    func demonstrateMotivation(women: Woman)
    func promoteEquality(women: Woman)
    func provideOpportunity(women: Woman)
}

//4. Create an extension to EmpowermentRequirements to maintain
extension EmpowermentRequirements {
    func demonstrateMotivation(women: Woman) {
        print("\(women.name) is driven to make a change and a difference in the world")
    }
    
    func promoteEquality(women: Woman) {
        print("\(women.name) advocates for women's rights and encourages diversity and inclusion")
    }
    
    func provideOpportunity(women: Woman) {
        print("\(women.name) strives to create equal opportunity for women to succeed and thrive in their careers")
    }
}

//5. Create a class to implement EmpowermentRequirements
class EmpoweredWoman: EmpowermentRequirements {
    func empower(women: Woman) {
        demonstrateMotivation(women: women)
        promoteEquality(women: women)
        provideOpportunity(women: women)
    }
}

//6. Create an instance of Woman
let woman1 = Woman(name: "Jane Doe", occupation: "Software Engineer")

//7. Create an instance of EmpoweredWoman
let empoweredWoman = EmpoweredWoman()

//8. Call the empower() method
 empoweredWoman.empower(women: woman1)

//9. Output
// Jane Doe is driven to make a change and a difference in the world
// Jane Doe advocates for women's rights and encourages diversity and inclusion
// Jane Doe strives to create equal opportunity for women to succeed and thrive in their careers