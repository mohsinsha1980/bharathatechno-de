-- CreateTable
CREATE TABLE "StaffRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "company_name" TEXT,
    "business_email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "company_website" TEXT,
    "company_address" TEXT,
    "required_roles" TEXT NOT NULL,
    "number_of_resources" INTEGER NOT NULL,
    "experience_level" TEXT NOT NULL,
    "skills" TEXT,
    "duration" TEXT,
    "availability" TEXT NOT NULL,
    "budget" TEXT,
    "tools" TEXT,
    "project_domain_experience" TEXT,
    "additional_notes" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
