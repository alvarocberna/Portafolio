
export const data = {
    perfilPersonal: {
        fotoPerfil: '/imgs/img_alvaro_cañete.jpg',
        descripcion: [
            'Mi nombre es Álvaro Cañete, estudiante de la carrera de Analista Programador Computacional - Duoc UC. Tengo 29 años, de la comuna de Viña del Mar.',
            'Como se puede apreciar en las secciones de tecnologías y proyectos, tengo experiencia tanto en las áreas de desarrollo front-end y back-end. Personalmente, tengo un gran interés por el desarrollo back-end, área en la cual me encuentro perfeccionando con la tecnología NodeJS.',
            'Actualmente me encuentro en la búsqueda de practica profesional, la cual, según lo establecido por Duoc, debe ser inscrita la semana del 12 al 16 de mayo, para dar inicio el 19 de mayo, con una duración de 360 horas.',
            'Busco de preferencia una practica pagada, aunque todo es conversable, dependiendo de la posibilidad de continuidad, área tecnológica y modalidad de trabajo.',
            'Si te interesa mi perfil y quieres hacerme una oferta, te invito a que me escribas a continuación:'
        ]
    },
    tecnologias: [
        {
            titulo: 'Lenguajes & entornos de ejecución',
            detalle: [
                { tecnologia: 'Python', valor: 2 },
                { tecnologia: 'Javascript', valor: 3 },
                { tecnologia: 'Typescript', valor: 3 },
                { tecnologia: 'Java', valor: 1 },
                { tecnologia: 'NodeJS', valor: 3 }
            ]
        },
        {
            titulo: 'Frameworks & librerías',
            detalle: [
                { tecnologia: 'React', valor: 3 },
                { tecnologia: 'NextJS', valor: 3 },
                { tecnologia: 'Angular', valor: 2 },
                { tecnologia: 'Django', valor: 2 },
                { tecnologia: 'Ionic', valor: 1 },
            ]
        },
        {
            titulo: 'Bases de datos',
            detalle: [
                { tecnologia: 'SQL', valor: 2 },
                { tecnologia: 'Oracle', valor: 3 }
            ]
        },
        {
            titulo: 'Otras tecnologías & herramientas',
            detalle: [
                { tecnologia: 'Git', valor: 3 },
                { tecnologia: 'Bootstrap', valor: 3 },
            ]
        },
    ],
    proyectos: [
        {
            titulo: 'Ciclolegal',
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
            titulo: 'Nutreactivo',
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
                link: 'https://www.google.com/'
            },
            {
                icon: '/imgs/img_mail.png',
                direccion: 'cberna.alvaro@gmail.com',
                link: 'https://www.google.com/'
            }
        ]
    }
}
