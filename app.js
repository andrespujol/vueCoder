Vue.component("navbar", {
    template: `
    <header>
        <div class=logo><h2><a href="index.html">Andrés Pujol</a></h2></div>
        <nav class="navbar navbar-expand-lg navbar-light menu">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sobreMi.html">Sobre mí</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="proyectos.html">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="skills.html">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contacto.html">Contacto</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    `
})
Vue.component("principal", {
    template: `
    <section class="principal">
        <h1>Hola! soy Andrés</h1>
        <h3>front-end developer</h3>
        <p>Estoy mayormente enfocado en la parte front-end de la web. En este sitio voy a mostrar los proyectos en los que estoy trabajando.</p>
        <a href="proyectos.html#projectos">Seguir bajando</a>
    </section>
    `
})
Vue.component("banner", {
    props: {
        titulo: {
            type: String,
            default: "Andrés Pujol"
        }
    },
    template: `
    <section id="banner" class="banner">
        <h2>{{ titulo }}</h2>
    </section>
    `
})

Vue.component("proyectos", {
    props: ["proyectos"],
            

    template: `
    <section id="proyectos" class="proyectos">
        <table >
            <thead>
                <tr >
                    <th > Proyecto</th>
                    <th > Herramientas</th>
                    <th > Links</th>
                </tr>
            </thead>
            <tbody v-for="(proyecto, i) in proyectos" :key="i" >
                <tr v-if="i%2==0"  class="par">
                    <td>{{ proyecto.proyecto }}</td>
                    <td>{{ proyecto.herramientas }}</td>
                    <td><a  href="{{ proyecto.links }}">{{proyecto.proyecto}}</a></td>
                </tr>
                <tr  v-else class="impar">
                    <td>{{ proyecto.proyecto }}</td>
                    <td>{{ proyecto.herramientas }}</td>
                    <td><a href="{{ proyecto.links }}">{{proyecto.proyecto}}</a></td>
                </tr>
            </tbody>
        </table>
    </section>
    `
})



var app = new Vue({
    el: "#app",
    data: {
        proyectos: [
            {
                id:1,
                proyecto: 'Morena',
                herramientas: 'React, Firebase',
                links: 'https://morena-seven.vercel.app/' 
            },
            {
                id:2,
                proyecto: 'CoderBank',
                herramientas: 'javascript, Jquery',
                links: 'https://andrespujol.github.io/simulador/' 
            },
            {
                id:3,
                proyecto: 'Morena',
                herramientas: 'React, Firebase',
                links: 'https://morena-seven.vercel.app/' 
            },
        ]
    },

})