<template>
  <div class="education">
<h3> Workshops </h3>
    <div class="section">
      <img src="../assets/codefirstgirlslogo.png" class="logo" />
      <div class="content">

        <p> Introduction to Python & Apps</p>
        <div class="tags"> 
          <button> Python </button>
          <button> App Development </button>
          <button> Pandas </button>
          <button> Libraries </button>
        </div>
      </div>
    </div>

    <div class="section">
      <img src="../assets/codefirstgirlslogo.png" class="logo" />
      <div class="content">

        <p> Introduction to JavaScript</p>
        <div class="tags"> 
          <button> JavaScript </button>
          <button> App Development </button>
          <button> Responsiveness </button>
          <button> HTML </button>
          <button> CSS </button>
        </div>
      </div>
    </div>

    <div class="section">
      <img src="../assets/freecodecamplogo.png" class="logo" />
      <div class="content">
        <p> FreeCodeCamp - Responsive Web Design Certification </p>
        <div class="tags"> 
          <button>HTML </button> 
          <button> CSS </button> 
          <button> JavaScript</button> 
          <button> React</button> 
          <button> TypeScript</button>
        </div>
      </div>
    </div>

    <div class="section">
      <img src="../assets/shecodeslogo.png" class="logo" />
      <div class="content">
        <p> SheCodes - Frontend Development Workshop</p>
        <div class="tags"> 
          <button>HTML</button>
          <button> CSS</button>
          <button> JavaScript</button>
          <button> React</button>
          <button>Figma</button>
        </div>
      </div>
    </div>
<h3> Nanodegree </h3>
    <div class="section">
      <img src="../assets/udacitylogo.png" class="logo" />
      <div class="content">
        <p> Udacity - Nanodegree program: AI Product Manager</p>
        <div class="tags">
          <button> AI</button>
          <button> Product Management</button>
          <button> Machine learning</button>
        </div>
      </div>
    </div>
<h3> Bacherlor degree </h3>
    <div class="section">
      <img src="../assets/ekpalogo.jpg" class="logo" />
      <div class="content">
        <p> National and Kapodistrian University of Athens - B.Sc. French Language and Literature </p>
        <div class="tags">
          <button> French</button>
          <button> Language</button>
          <button> Literature</button>
          <button> Bachelor Degree</button>
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>
@media (min-width: 1024px) {

  .education {
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

  .logo {
    width: 60px;
    height: auto;
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

  .tags button {
    padding: 5px 10px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .tags button:hover {
    background-color: #e0e0e0;
  }

  p {
    margin: 0;
  }
}
</style>