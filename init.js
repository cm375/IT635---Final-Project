// init.js

// Switch to the database
const db = db.getSiblingDB("HealthcareManagementSystemDB");

// Create Patients collection (no schema validation for now)
db.createCollection("Patients");

// Create Doctors collection (no schema validation for now)
db.createCollection("Doctors");

// Create Appointments collection with schema validation
db.createCollection("Appointments", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["patient_id", "doctor_id", "appointment_date", "status"],
      properties: {
        patient_id: {
          bsonType: "objectId",
          description: "Must be a patient ObjectId and is required"
        },
        doctor_id: {
          bsonType: "objectId",
          description: "Must be a doctor ObjectId and is required"
        },
        appointment_date: {
          bsonType: "date",
          description: "Must be a valid appointment date and is required"
        },
        reason: {
          bsonType: "string",
          description: "Optional reason for the visit"
        },
        status: {
          enum: ["scheduled", "completed", "cancelled"],
          description: "Appointment status must be one of the allowed values"
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});

// Insert Appointment documents
db.Appointments.insertMany([
  {
    _id: ObjectId("681d82e4958bcf58103d6fd2"),
    patient_id: ObjectId("000000000000000000000101"),
    doctor_id: ObjectId("000000000000000000001101"),
    appointment_date: ISODate("2025-04-13T00:00:00Z"),
    status: "scheduled"
  },
  {
    _id: ObjectId("681d82e4958bcf58103d6fd3"),
    patient_id: ObjectId("000000000000000000000102"),
    doctor_id: ObjectId("000000000000000000001102"),
    appointment_date: ISODate("2025-02-12T00:00:00Z"),
    status: "cancelled"
  },
  {
    _id: ObjectId("681d82e4958bcf58103d6fd4"),
    patient_id: ObjectId("000000000000000000000103"),
    doctor_id: ObjectId("000000000000000000001103"),
    appointment_date: ISODate("2025-03-30T00:00:00Z"),
    status: "scheduled"
  },
  {
    _id: ObjectId("681d82e4958bcf58103d6fd5"),
    patient_id: ObjectId("000000000000000000000104"),
    doctor_id: ObjectId("000000000000000000001105"),
    appointment_date: ISODate("2025-03-16T00:00:00Z"),
    status: "scheduled"
  },
  {
    _id: ObjectId("681d82e4958bcf58103d6fd6"),
    patient_id: ObjectId("000000000000000000000105"),
    doctor_id: ObjectId("000000000000000000001108"),
    appointment_date: ISODate("2025-05-20T00:00:00Z"),
    status: "scheduled"
  },
  {
    _id: ObjectId("681d82e4958bcf58103d6fd7"),
    patient_id: ObjectId("000000000000000000000106"),
    doctor_id: ObjectId("000000000000000000001110"),
    appointment_date: ISODate("2025-06-22T00:00:00Z"),
    status: "scheduled"
  },
  {
    _id: ObjectId("681d82e4958bcf58103d6fd8"),
    patient_id: ObjectId("000000000000000000000107"),
    doctor_id: ObjectId("000000000000000000001101"),
    appointment_date: ISODate("2025-02-20T00:00:00Z"),
    status: "cancelled"
  },
  {
    _id: ObjectId("681d82e4958bcf58103d6fd9"),
    patient_id: ObjectId("000000000000000000000108"),
    doctor_id: ObjectId("000000000000000000001108"),
    appointment_date: ISODate("2025-07-25T00:00:00Z"),
    status: "scheduled"
  },
  {
    _id: ObjectId("681d82e4958bcf58103d6fda"),
    patient_id: ObjectId("000000000000000000000109"),
    doctor_id: ObjectId("000000000000000000001101"),
    appointment_date: ISODate("2025-08-26T00:00:00Z"),
    status: "scheduled"
  },
  {
    _id: ObjectId("681d82e4958bcf58103d6fdb"),
    patient_id: ObjectId("000000000000000000000110"),
    doctor_id: ObjectId("000000000000000000001102"),
    appointment_date: ISODate("2025-04-28T00:00:00Z"),
    status: "scheduled"
  }
]);


// Insert Patient documents
db.Patients.insertMany([
  {
    _id: ObjectId("681d8348958bcf58103d6fdd"),
    patient_id: 101,
    first_name: "Emily",
    last_name: "Clark",
    dob: ISODate("1987-03-22T00:00:00Z"),
    gender: "Female",
    address: "Address: 100 Maple Ave, City: Newark, State: NJ, Zip: 07106",
    phone: "(555)123-4567",
    insurance_info: "Carrier: United Health, PolicyNo.: UH987654321, Insurance Plan: HMO"
  },
  {
    _id: ObjectId("681d8348958bcf58103d6fde"),
    patient_id: 102,
    first_name: "Michael",
    last_name: "Johnson",
    dob: ISODate("1992-11-04T00:00:00Z"),
    gender: "Male",
    address: "Address: 203 Pine Street, City: Atlanta, State: GA, Zip: 30301",
    phone: "(555)234-5678",
    insurance_info: "Carrier: Blue Cross Blue Shield, PolicyNo.: BCBS123456789, Insurance Plan: PPO"
  },
  {
    _id: ObjectId("681d8348958bcf58103d6fdf"),
    patient_id: 103,
    first_name: "Sarah",
    last_name: "Lee",
    dob: ISODate("1975-07-15T00:00:00Z"),
    gender: "Female",
    address: "Address: 500 Oak Road, City: Denver, State: CO, Zip: 80202",
    phone: "(555)345-6789",
    insurance_info: "Carrier: Aetna, PolicyNo.: AET34567901, Insurance Plan: POS"
  },
  {
    _id: ObjectId("681d8348958bcf58103d6fe0"),
    patient_id: 104,
    first_name: "David",
    last_name: "White",
    dob: ISODate("1980-02-28T00:00:00Z"),
    gender: "Male",
    address: "Address: 801 Cedar Lane, City: Dallas, State: TX, Zip: 75201",
    phone: "(555)456-7890",
    insurance_info: "Carrier: Humana, PolicyNo.: HUM234567890, Insurance Plan: HMO"
  },
  {
    _id: ObjectId("681d8348958bcf58103d6fe1"),
    patient_id: 105,
    first_name: "Jessica",
    last_name: "Davis",
    dob: ISODate("1990-09-10T00:00:00Z"),
    gender: "Female",
    address: "Address: 104 Birch St, City: Phoenix, State: AZ, Zip: 85001",
    phone: "(555)567-8901",
    insurance_info: "Carrier: Cigna, PolicyNo.: CIG567890123, Insurance Plan: PPO"
  },
  {
    _id: ObjectId("681d8348958bcf58103d6fe2"),
    patient_id: 106,
    first_name: "William",
    last_name: "Martinez",
    dob: ISODate("1998-12-05T00:00:00Z"),
    gender: "Male",
    address: "Address: 605 Pine Ave, City: Los Angeles, State: CA, Zip: 90001",
    phone: "(555)678-9012",
    insurance_info: "Carrier: Kaiser Permanente, PolicyNo.: KP678901234, Insurance Plan: HMO"
  },
  {
    _id: ObjectId("681d8348958bcf58103d6fe3"),
    patient_id: 107,
    first_name: "Linda",
    last_name: "Gonzalez",
    dob: ISODate("1982-06-25T00:00:00Z"),
    gender: "Female",
    address: "Address: 703 Elm Street, City: Miami, State: FL, Zip: 33101",
    phone: "(555)789-0123",
    insurance_info: "Carrier: United Health, PolicyNo.: UH234567890, Insurance Plan: PPO"
  },
  {
    _id: ObjectId("681d8348958bcf58103d6fe4"),
    patient_id: 108,
    first_name: "James",
    last_name: "Thomas",
    dob: ISODate("1979-01-12T00:00:00Z"),
    gender: "Male",
    address: "Address: 809 W 51st Street, City: New York, State: NY, Zip: 10001",
    phone: "(555)890-1234",
    insurance_info: "Carrier: Anthem, PolicyNo.: ANTH234567891, Insurance Plan: POS"
  },
  {
    _id: ObjectId("681d8348958bcf58103d6fe5"),
    patient_id: 109,
    first_name: "Karen",
    last_name: "Robinson",
    dob: ISODate("1984-08-18T00:00:00Z"),
    gender: "Female",
    address: "Address: 1205 Oakland St, City: Seattle, State: WA, Zip: 98101",
    phone: "(555)901-2345",
    insurance_info: "Carrier: Blue Cross Blue Shield, PolicyNo.: BCBS987654321, Insurance Plan: PPO"
  },
  {
    _id: ObjectId("681d8348958bcf58103d6fe6"),
    patient_id: 110,
    first_name: "Robert",
    last_name: "Harris",
    dob: ISODate("1995-04-13T00:00:00Z"),
    gender: "Male",
    address: "Address: 903 Cherry Blvd, City: San Francisco, State: CA, Zip: 94101",
    phone: "(555)012-3456",
    insurance_info: "Carrier: Aetna, PolicyNo.: AET123456789, Insurance Plan: HMO"
  }
]);


// Insert Doctor documents
db.Doctors.insertMany([
  {
    _id: ObjectId("681d837d958bcf58103d6fe8"),
    doctor_id: 1101,
    first_name: "Amber",
    last_name: "Johnson",
    specialization: "Family Medicine",
    schedule: "M:9:00a-3:00p, T:8:00a-4:00p, W:9:00a-1:00p, Thu:10:00a-5:00p, F:9:00a-12:00p"
  },
  {
    _id: ObjectId("681d837d958bcf58103d6fe9"),
    doctor_id: 1102,
    first_name: "Michael",
    last_name: "Brown",
    specialization: "Cardiology",
    schedule: "M:10:00a-5:00p, T:9:00a-4:00p, W:8:00a-3:00p, Thu:9:00a-12:00p, F:9:00a-2:00p"
  },
  {
    _id: ObjectId("681d837d958bcf58103d6fea"),
    doctor_id: 1103,
    first_name: "Sarah",
    last_name: "Lee",
    specialization: "Neurology",
    schedule: "M:8:00a-12:00p, T:1:00p-5:00p, W:9:00a-4:00p, Thu:9:00a-1:00p, F:10:00a-3:00p"
  },
  {
    _id: ObjectId("681d837d958bcf58103d6feb"),
    doctor_id: 1104,
    first_name: "David",
    last_name: "Miller",
    specialization: "Orthopedics",
    schedule: "M:9:00a-3:00p, T:8:00a-2:00p, W:10:00a-5:00p, Thu:9:00a-1:00p, F:8:00a-12:00p"
  },
  {
    _id: ObjectId("681d837d958bcf58103d6fec"),
    doctor_id: 1105,
    first_name: "Samantha",
    last_name: "Thompson",
    specialization: "Family Medicine",
    schedule: "M:9:00a-3:00p, T:8:00a-4:00p, W:9:00a-1:00p, Thu:10:00a-5:00p, F:9:00a-12:00p"
  },
  {
    _id: ObjectId("681d837d958bcf58103d6fed"),
    doctor_id: 1106,
    first_name: "Lisa",
    last_name: "Davis",
    specialization: "Pediatrics",
    schedule: "M:8:30a-2:30p, T:9:00a-4:00p, W:10:00a-3:00p, Thu:8:00a-1:00p, F:9:00a-12:00p"
  },
  {
    _id: ObjectId("681d837d958bcf58103d6fee"),
    doctor_id: 1107,
    first_name: "John",
    last_name: "Garcia",
    specialization: "Gastroenterology",
    schedule: "M:8:00a-4:00p, T:9:00a-3:00p, W:1:00p-5:00p, Thu:9:00a-2:00p, F:8:00a-12:00p"
  },
  {
    _id: ObjectId("681d837d958bcf58103d6fef"),
    doctor_id: 1108,
    first_name: "James",
    last_name: "Williams",
    specialization: "Dermatology",
    schedule: "M:10:00a-2:00p, T:9:00a-4:00p, W:8:00a-3:00p, Thu:1:00p-5:00p, F:9:00a-12:00p"
  },
  {
    _id: ObjectId("681d837d958bcf58103d6ff0"),
    doctor_id: 1109,
    first_name: "Karen",
    last_name: "Clark",
    specialization: "Obstetrics and Gynecology",
    schedule: "M:9:00a-1:00p, T:10:00a-5:00p, W:8:00a-12:00p, Thu:9:00a-3:00p, F:10:00a-2:00p"
  },
  {
    _id: ObjectId("681d837d958bcf58103d6ff1"),
    doctor_id: 1110,
    first_name: "Robert",
    last_name: "Anderson",
    specialization: "Psychiatry",
    schedule: "M:1:00p-4:00p, T:9:00a-3:00p, W:10:00a-2:00p, Thu:8:00a-12:00p, F:9:00a-1:00p"
  }
]);
