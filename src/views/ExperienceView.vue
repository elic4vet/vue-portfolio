<template>
  <div class="experience">

    <div class="section">
      <img src="../assets/kreativstorm.png" class="logo">
      <div class="content">
        <h3> Junior Frontend Developer training internship</h3>
        <span>JAN 2024 - FEB 2024</span>
        <div class="tags">
          <button> Front-end</button>
          <button> JavaScript</button>
          <button> Code review</button>
          <button> GitHub</button>
        </div>
        <ul>
          <li>Frontend Development: Participation in projects focused on frontend development technologies such as HTML,
            CSS, JavaScript.</li>
          <li>Project Collaborations: Collaboration with fellow interns on frontend development projects,
            demonstrating teamwork and communication skills in a real-world project environment.</li>
          <li>
            Code Review Sessions: Involvement in code review sessions where interns provide feedback on each other's
            frontend development projects, fostering collaboration and skill improvement.
          </li>
        </ul>
      </div>
    </div>

    <div class="section">
      <img src="../assets/arvato.jpg" class="logo">
      <div class="content">
        <h3>Arvato SE - Costumer service employee </h3>
        <span>B2B, B2C (Markets : FR,CH, BNL, DE, EN)</span>
        <span>OCT 2016 - today </span>
        <div class="tags">
          <button> Logistics</button>
          <button> Customer service</button>
          <button> SAP</button>
          <button> CRM</button>
        </div>
        <ul>
          <li>
            Learns quickly new skills (SAP, CRM, ERP, etc.) and applies them to daily tasks to improve efficiency and
            Productivity.
          </li>
          <li>Offers friendly and efficient service to customers and handles challenging situations with ease.</li>
          <li>Actively listens to customers' requests, confirming full understanding before addressing concerns.</li>
          <li>Increases customer satisfaction by resolving issues.</li>
          <li>Carries out day-to-day duties accurately and efficiently (order management, shipment control, audits,
            etc.).</li>
          <li>Monitors the company’s inventory to keep stock levels and databases updated.</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  p {
    margin: 0;
  }

  .experience {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }

  .section {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }
}
</style>