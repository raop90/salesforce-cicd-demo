@IsTest
public class StudentTest {

    @IsTest
    static void testStudentCreation() {

        Student s = new Student();

        System.assertNotEquals(null, s);

    }
}
