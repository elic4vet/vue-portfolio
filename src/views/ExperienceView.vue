<template>
  <div class="experience">

    <div class="section">
      <img src="../assets/kreativstorm.png" class="logo">
      <div class="content">
        <p> Junior Frontend Developer training internship</p>
        <div class="tags">
          <button> Front-end</button>
          <button> JavaScript</button>
          <button> Code review</button>
          <button> GitHub</button>
        </div>
      </div>
    </div>

    <div class="section">
      <img src="../assets/arvato.jpg" class="logo">
      <div class="content">
        <p>Arvato SE - Costumer service employee</p>
        <div class="tags">
          <button> Logistics</button>
          <button> Customer service</button>
          <button> SAP</button>
          <button> CRM</button>
        </div>
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