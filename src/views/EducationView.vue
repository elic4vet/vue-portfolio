<template>
  <div class="education">
    <div><img src="../assets/codefirstgirlslogo.png" class="logo" />
      <p> Introduction to Python & Apps</p>
      <p class="tags"> <button> Python </button>,<button> App Development </button>, <button> Pandas </button>,
        <button>
          Libraries
        </button>
      </p>
    </div>

    <div class="row section">
      <img src="../assets/freecodecamplogo.png" class="logo" />
      <p> FreeCodeCamp - Responsive Web Design Certification </p>
      <p class="tags"> <button>HTML </button>, <button> CSS </button> , <button> JavaScript</button> , <button>
          React</button> , <button> TypeScript</button></p>
    </div>

    <div class="row section">
      <img src="../assets/shecodeslogo.png" class="logo" />
      <p> SheCodes - Frontend Development Workshop </p>
      <p class="tags"><button>HTML</button>, <button> CSS</button> , <button> JavaScript</button> , <button>
          React</button> ,
        <button>Figma</button>
      </p>
    </div>

    <div class="row section">
      <img src="../assets/udacitylogo.png" class="logo" />
      <p> Udacity - Nanodegree program : AI Product Manager </p>
      <p class="tags"><button> AI</button>, <button> Product Management</button> , <button> Machine learning</button>/>
      </p>
    </div>

    <div class="row section">
      <img src="../assets/ekpalogo.jpg" class="logo" />
      <p> National and Kapodistrian University of Athens" - B.Sc. French Language and Litterature </p>
      <p class="tags"><button> French</button>, <button> Language</button> , <button>
          Litterature</button> ,<button> Bachelor Degree</button></p>
    </div>
  </div>
</template>

<style>


@media (min-width: 1024px) {
  .education {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    text-align: start;
    gap: 20px;
    padding: 10px;
  }
}
</style>