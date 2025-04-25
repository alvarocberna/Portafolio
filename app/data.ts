
export const data = {
    perfilPersonal: {
        fotoPerfil: '/imgs/img_alvaro_cañete.jpg',
        descripcion: [
            '¿Qué ofrezco?',
            [

                'Soy un desarrollador con conocimientos en una amplia gama de tecnologías, como las relacionadas con el area front-end (react-angular), back-end (nodejs-express-docker) y base de datos (oracle-mysql-mongodb). Puedes conocer mi stack completo de tecnologías en mi portafolio: alvarocanete.cl.',
                'Flexibilidad y disposición para siempre aprender nuevas tecnologías que sean requeridas en el mercado.',
                'Al ser esta la segunda carrera que obtengo, habiendo trabajado anteriormente en el area de la salud, tengo una mente abierta para comprender otras áreas diferentes a la programación como tal.',
                'Poseo un gran sentido de responsabilidad y compromiso con las tareas y proyectos que se me otorgan.',
                'Por último, un aspecto clave para mi trabajo, el cual involucra tratar con personas día a día, ha sido tener un buen nivel de comunicación interpersonal, aspecto que me permite comunicar y relacionar efectivamente con otras personas de mi ambiente laboral.'
            ],
            '¿Qué busco?',
            [
                'Práctica profesional presencial (viña) o hibrida (stgo).',
                'Ambiente donde pueda poner en práctica mis habilidades y crecer profesionalmente.',
                'Posibilidad de continuidad y/o practica remunerada.',
            ],
            'Detalles practica',
            [
                'Inscripción (ideal) y validación entre el 12 y 16 de mayo.',
                'Inicio (ideal) a partir del 19 de mayo.',
                'Duración de 360 horas.',
                'Cuento con seguro estudiantil: sí.',
                'La empresa de practica debe estar validada frente al SII.'
            ]
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
            titulo: 'Servidor backend portafolio',
            descripcion: 'Proyecto correspondiente al backend de esta página web, el cual provee el servicio para enviar correos electrónicos',
            tecnologias: [
                'Typescript',
                'Nodejs',
                'Express'
            ],
            imgProyecto: '/imgs/img_proyecto_ciclolegal.png',
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
