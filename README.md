# 🚀 SaaS Multi-Organization Work Management

> A modern **multi-tenant SaaS platform** for task and project management — inspired by Jira, Trello, and Asana.

---

## 📋 Overview

This project is a **Software as a Service (SaaS)** application for managing **tasks and projects** across multiple organizations (**tenants**).  
It delivers a **scalable**, **secure**, and **user-friendly** platform to streamline collaborative workflows, with **data isolation per tenant** while running on a single codebase.

---

## 🎯 Purpose

To provide an **efficient** and **customizable** work management solution that enables teams and organizations to:

- 📌 **Organize** tasks and projects efficiently.  
- 📊 **Track** progress, priorities, and deadlines.  
- 💬 **Collaborate** via comments, checklists, and file attachments.  
- 🏢 **Support multiple organizations** with isolated data and flexible subscription plans.

---

## 👥 Target Audience

- **Small & Medium Businesses (SMBs)** — Startups, agencies, small companies needing cost-effective solutions.  
- **Freelance & Remote Teams** — Managing client projects and distributed workflows.  
- **Large Organizations** — Multiple departments with isolated project spaces.  
- **Individual Users** — Personal task management with a free plan.  
- **SaaS Developers** — Looking to customize or white-label a work management platform.

---

## ✨ Key Features

### 🏢 Multi-Tenant Architecture
- Isolated data for each organization via **tenant_id**.
- Unique slugs for tenant identification.

### 👤 User Management
- Roles: **OWNER**, **ADMIN**, **MEMBER**, **VIEWER**.
- JWT-based authentication + refresh tokens.

### 📂 Project Management
- Create/manage projects with unique **keys**, **names**, and **descriptions**.

### ✅ Task Management
- Title, description, assignee, reporter, status (**todo / in_progress / done**), priority, due date, time estimate.

### 🤝 Collaboration Tools
- **Labels** — Categorize tasks with colors.
- **Comments** — Mention users (JSONB support).
- **Attachments** — Store file metadata (e.g., S3 URLs).
- **Checklists** — Track subtasks inside tasks.

### 👥 Teams
- Group users within a tenant for collaboration.

### 🔍 Search & Data Management
- Full-text search via PostgreSQL **GIN** index.
- Audit fields + soft delete for data recovery.

---

## 🛠 Technical Stack

| Layer          | Technology |
|----------------|------------|
| **Backend**    | Java Spring Boot (JPA/Hibernate) |
| **Database**   | PostgreSQL (+ `pgcrypto`, `btree_gin`) |
| **Security**   | JWT Auth, password hashing, refresh tokens |
| **Entities**   | Tenant, User, Role, UserRole, Project, Task, Label, TaskLabel, Comment, Attachment, Checklist, ChecklistItem, Team |

**Features:**
- Multi-tenant isolation (`tenant_id`).
- Unique constraints per tenant (project key/name).
- DB triggers for `updated_at`.
- Performance indexes.

---

## 🚀 Getting Started

1. **Setup Database**  
   - Initialize PostgreSQL with the provided schema (tables, constraints, triggers).

2. **Configure Backend**  
   - Add Spring Boot dependencies for JPA, Security, JWT.

3. **Seed Data**  
   - Populate `roles` table with: OWNER, ADMIN, MEMBER, VIEWER.

4. **Run Application**  
   - Use `AuthService` for register/login/refresh token.

5. **Extend**  
   - Add REST APIs + React frontend for full functionality.

---

## 🔮 Future Enhancements

- 🌐 REST APIs for task/project management.  
- 💻 Modern React UI.  
- ☁ Cloud storage integration (e.g., S3) for attachments.  
- 💳 Subscription billing system.  
- 🔔 Real-time notifications + reporting.

---

## 📜 License
This project is licensed under the **MIT License**.

---
