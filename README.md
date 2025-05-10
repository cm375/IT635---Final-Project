IT635-852 Database Administration Final Project

• Courtney Martin
• Professor Tolboom
• Project Status - Submitted

File
• init.js

Usage to load and test the validator

• Open mongosh and run:
    load('init.js');
    --> show collections();
    --> db.Appointments.find().pretty();

• Inserts that will fail validation (due to missing fields or invalid status):
    ○ db.Appointments.insert({})
    ○ db.Appointments.insert({ patient_id: ObjectId("...") })  // Missing required fields
    ○ db.Appointments.insert({ 
        patient_id: ObjectId("000000000000000000000101"), 
        doctor_id: ObjectId("000000000000000000001101"), 
        appointment_date: new Date(), 
        status: "pending"  // Invalid status
    });

• Inserts that will pass validation:
    ○ db.Appointments.insert({
        patient_id: ObjectId("000000000000000000000101"),
        doctor_id: ObjectId("000000000000000000001101"),
        appointment_date: ISODate("2025-09-01T10:00:00Z"),
        status: "scheduled"
    });

Collections
• Patients - Contains patient demographic and insurance information
• Doctors - Contains doctor profiles and weekly schedules
• Appointments - Stores scheduled, completed, or cancelled appointments with references to patients and doctors
