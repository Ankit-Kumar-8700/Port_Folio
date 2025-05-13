import React from 'react';
import Role from './role';
import './experience.css';

function Experience() {
  return (
    <ul class="timeline">
        <Role
            organization="Finguard Technologies"
            role="Backend Intern" date="May 2024 - Sept 2024"
            bullets={[
                "Optimized backend routes, resulting in a 20% improvement in API response times and more efficient data handling across services.",
                "Designed and implemented a budget model with backend routes, supporting real-time financial tracking for over 1,000 users.",
                "Developed backend logic for the Budget and Expenses page, enabling seamless data integration with frontend components and reducing frontend-backend sync issues by 25%.",
                "Integrated country-wise phone number validation and secure password visibility toggle on the authentication page, improving user onboarding experience and reducing form errors by 35%."
            ]}
            link='https://drive.google.com/file/d/1OM2Ejb7F0AfD0qt-7Ej-BvUow5czKYlo/view'
        />

        <Role 
            organization="Korangle"
            role="Web Developer Intern"
            date="Dec 2024 - May 2025"
            bullets={[
                "Developed and delivered 2 production-grade modules—View Receipt List Page and View Result Sheet Page—requested and adopted by 16+ schools, streamlining fee and academic data reporting.",
                "Engineered 10+ advanced features such as session-wise filters, column sorting/shuffling, row filters, auto-save, and Excel/print export, cutting manual data handling time by ~40%.",
                "Built a fully customizable result sheet system with support for grade rule sets, column types/subtypes, session-based filtering, and CRUD operations, enabling creation of multiple result formats.",
                "Ensured 100% accuracy in fee and academic report exports by validating data against backend collation and preserving exact table structure in Excel/print views.",
                "Enhanced operational efficiency through features like report duplication, deletion, and real-time auto-save, resulting in a 30% boost in reporting workflow performance."
            ]}
            link='https://drive.google.com/file/d/1eaqXEynwsouGsf3grGDrBM0k9Oaac_ue/view'
        />
    </ul>
  )
}

export default Experience
