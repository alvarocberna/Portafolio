
export const data = {
    portada: {
        foto: '/imgs/img-portada-5.jpg'
    },
    perfilPersonal: {
        descripcion: [
            'Mi nombre es Álvaro Cañete Berna.',
            'Actualmente tengo 30 años.',
            'Egresado de Analísta Programador Computacional DuocUC.',
            'Desarrollador de aplicaciones web.',
        ]
    },
    tecnologias: [
        {
            titulo: 'Lenguajes',
            color: '#2E86C1',
            detalle: [
                { tecnologia: 'Python', valor: 2 },
                { tecnologia: 'Javascript', valor: 3 },
                { tecnologia: 'Typescript', valor: 3 },
            ]
        },
        {
            titulo: 'Base de datos & Nube',
            color: '#D5BFA3',
            detalle: [
                { tecnologia: 'Oracle', valor: 3 },
                { tecnologia: 'MongoDB', valor: 2 },
                { tecnologia: 'MySQL', valor: 2 },
                { tecnologia: 'Certificado en AWS', valor: 2 },

            ]
        },
        {
            titulo: 'Frontend',
            color: '#F4B266',
            detalle: [
                { tecnologia: 'HTML', valor: 2 },
                { tecnologia: 'CSS', valor: 2 },
                { tecnologia: 'React', valor: 2 },
                { tecnologia: 'NextJS', valor: 2 },
                { tecnologia: 'Angular', valor: 2 },
                { tecnologia: 'Bootstrap', valor: 2 },
                { tecnologia: 'Tailwind', valor: 2 },
                { tecnologia: 'SEO', valor: 3 },

            ]
        },
        {
            titulo: 'Backend',
            color: '#3e3e3e',
            detalle: [
                { tecnologia: 'Nodejs', valor: 3 },
                { tecnologia: 'Express', valor: 2 },
                { tecnologia: 'Django', valor: 2 },
                { tecnologia: 'Nestjs', valor: 2 },
                { tecnologia: 'Docker', valor: 2 },
                { tecnologia: 'Postman', valor: 2 },
                { tecnologia: 'Jest', valor: 1 },
                { tecnologia: 'APIs-REST', valor: 2 },

            ]
        },
        {
            titulo: 'Otras tecnologías & herramientas',
            color: '#5DADE2',
            detalle: [
                { tecnologia: 'Git', valor: 3 },
                { tecnologia: 'Github', valor: 3 },
            ]
        },
    ],
    proyectos: [
        {
            titulo: 'Nutriapp',
            descripcion: 'Aplicación de uso médico, construida con las tecnologías de nextjs (frontend) y nestjs (backend), en base al lenguaje typescript. El frontend sigue una organización feature-based, mientras que el backend sigue los principios de arquitectura limpia, separando el proyecto en capas. Utiliza un sistema de autenticación en base a JWT. Por último, la base de datos sigue un esquema multi-tenant con esquemas compartidos, ideal para múltiples clientes pequeños.',
            tecnologias: [
                'Typescript',
                'Nodejs',
                'Express'
            ],
            imgProyecto: '/imgs/img_nutriapp.png',
            linkProyecto: 'https://www.youtube.com/watch?v=v68JUz08VYs&t=28s',
            imgCode: '/imgs/img_code.jpg',
            linkRepositorio: 'https://google.com'
        },
        {
            titulo: 'Servidor backend portafolio',
            descripcion: 'Proyecto correspondiente al backend de esta página web, el cual provee el servicio para enviar correos electrónicos',
            tecnologias: [
                'Typescript',
                'Nodejs',
                'Express'
            ],
            imgProyecto: '/imgs/img_code.jpg',
            linkProyecto: 'https://github.com/alvarocberna/Portafolio-Back.git',
            imgCode: '/imgs/img_code.jpg',
            linkRepositorio: 'https://github.com/alvarocberna/Portafolio-Back.git'
        },
        {
            titulo: 'Página web Nutreactivo',
            descripcion: 'Proyecto web personal.',
            tecnologias: [
                'Javascript',
                'Nextjs',
                'Bootstrap'
            ],
            imgProyecto: '/imgs/img_proyecto_nutreactivo.png',
            linkProyecto: 'https://www.nutreactivo.cl/',
            imgCode: '/imgs/img_code.jpg',
            linkRepositorio: 'https://github.com/alvarocberna/Nutreactivo_front.git'
        },
        {
            titulo: 'Sistema de reserva Pacific Reef',
            descripcion: 'Sistema de reserva hotelera, desarrollado en el ramo de Desarrollo de Software. Este sistema tiene como fin optimizar el proceso de reservas a los clientes del hotel, así como facilitar la gestión de reservas e información del hotel por parte de los empleados.',
            tecnologias: [
                'Python',
                'Django',
                'Oracle'
            ],
            imgProyecto: '/imgs/img_proyecto_pacificreef.png',
            linkProyecto: 'https://www.youtube.com/watch?v=sNWwz6P1fgs',
            imgCode: '/imgs/img_code.jpg',
            linkRepositorio: 'https://github.com/alvarocberna/ProjectPacificReef.git'
        },
        {
            titulo: 'Página web Ciclolegal',
            descripcion: 'Proyecto web para el equipo de abogados Ciclolegal.',
            tecnologias: [
                'Javascript',
                'Nextjs',
                'Bootstrap'
            ],
            imgProyecto: '/imgs/img_proyecto_ciclolegal.png',
            linkProyecto: 'https://ciclolegal.cl/',
            imgCode: '/imgs/img_code.jpg',
            linkRepositorio: 'https://github.com/alvarocberna/Ciclolegal_front.git'
        }
    ],
    contacto: {
        descripcion: 'Información de contacto:',
        infoContacto: [
            {
                icon: '/imgs/img_wtsp.png',
                direccion: '+56981620295',
                link: 'https://api.whatsapp.com/send?phone=56981620295'
            },
            {
                icon: '/imgs/img_mail.png',
                direccion: 'cberna.alvaro@gmail.com',
                link: 'mailto:cberna.alvaro@gmail.com'
            }
        ]
    }
}
