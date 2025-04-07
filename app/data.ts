
export const data = {
    perfilPersonal: {
        fotoPerfil: '/imgs/img_alvaro_cañete.jpg',
        descripcion: [
            'Mi nombre es Álvaro Cañete, estudiante de la carrera de Analista Programador Computacional - Duoc UC.',
            'Como se puede apreciar en las secciones de tecnologías y proyectos, tengo experiencia tanto en las áreas de desarrollo front-end y back-end. Personalmente, tengo un gran interés por el desarrollo back-end, área en la cual me encuentro perfeccionando con la tecnología NodeJS.',
            'Actualmente me encuentro en la búsqueda de practica profesional, la cual, según lo establecido por Duoc, debe ser inscrita la semana del 12 al 16 de mayo, para dar inicio el 19 de mayo, con una duración de 360 horas.',
            'Busco de preferencia una practica pagada, aunque todo es conversable, dependiendo de la posibilidad de continuidad, área tecnológica y modalidad de trabajo.',
            'Si te interesa mi perfil y quieres hacerme una oferta, te invito a que me escribas a continuación:'
        ]
    },
    tecnologias: [
        {
            titulo: 'Lenguajes',
            detalle: [
                { tecnologia: 'Python', valor: 2 },
                { tecnologia: 'Javascript', valor: 3 },
                { tecnologia: 'Typescript', valor: 3 },
                { tecnologia: 'Java', valor: 1 },
            ]
        },
        {
            titulo: 'Sistemas de gestión de bases de datos',
            detalle: [
                { tecnologia: 'Oracle', valor: 3 },
                { tecnologia: 'MongoDB', valor: 2 },
                { tecnologia: 'MySQL', valor: 2 },
            ]
        },
        {
            titulo: 'Front-end',
            detalle: [
                { tecnologia: 'HTML', valor: 2 },
                { tecnologia: 'CSS', valor: 2 },
                { tecnologia: 'React', valor: 2 },
                { tecnologia: 'NextJS', valor: 2 },
                { tecnologia: 'Angular', valor: 2 },
                { tecnologia: 'Bootstrap', valor: 2 },
                { tecnologia: 'SEO', valor: 3 },

            ]
        },
        {
            titulo: 'Back-end',
            detalle: [
                { tecnologia: 'Nodejs', valor: 3 },
                { tecnologia: 'Express', valor: 2 },
                { tecnologia: 'Django', valor: 2 },
                { tecnologia: 'Docker', valor: 2 },
                { tecnologia: 'Postman', valor: 2 },
                { tecnologia: 'Jest', valor: 1 },
                { tecnologia: 'APIs-REST', valor: 2 },

            ]
        },
        {
            titulo: 'Otras tecnologías & herramientas',
            detalle: [
                { tecnologia: 'Git', valor: 3 },
            ]
        },
    ],
    proyectos: [
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
