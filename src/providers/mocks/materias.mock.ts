export var MATERIAS:Array <any> = [
	{'ano':'1','comision':'1-2','modo':'Teor.','dia':'Lunes', 'nombre':'Análisis Matemático','hora':'10.00', 'aula': 'Mayor 2'},
	{'ano':'1','comision':'2','modo':'Prac.','dia':'Lunes', 'nombre':'Química', 'hora':'15.00', 'aula': 'Lab. Química'},
	{'ano':'1','comision':'1','modo':'Prac.','dia':'Lunes', 'nombre':'Química', 'hora':'17.00', 'aula': 'Lab. Química'},
	{'ano':'1','comision':'2','modo':'Prac.','dia':'Lunes' , 'nombre':'Sist. de Repr.','hora':'17.00', 'aula': 'Virg. del Valle'},
	{'ano':'1','comision':'1','modo':'Prac.','dia':'Lunes' , 'nombre':'Sist. de Repr.','hora':'19.00', 'aula': 'Virg. del Valle'},
	
	{'ano':'1','comision':'1-2','modo':'Teor.','dia':'Martes' , 'nombre':'Física','hora':'08.00', 'aula': 'Mayor 2'},
	{'ano':'1','comision':'1-2','modo':'Teor.','dia':'Martes','nombre':'Análisis Matemático' , 'hora':'10.00', 'aula': 'Mayor 2'},
	
	{'ano':'1','comision':'1-2','modo':'Prac.','dia':'Miercoles' , 'nombre':'Física','hora':'08.00', 'aula': 'Martha Bienner'},
	{'ano':'1','comision':'1-2','modo':'Teor.','dia':'Miercoles' ,'nombre':'Algebra', 'hora':'10.00', 'aula': 'Mayor 2'},
	{'ano':'1','comision':'1-2','modo':'Prac.','dia':'Miercoles','nombre':'Análisis Matemático' , 'hora':'18.00', 'aula': 'Martha Bienner'},
	
	{'ano':'1','comision':'1-2','modo':'Teor.','dia':'Jueves' , 'nombre':'Física','hora':'08.00', 'aula': 'Mayor 2'},
	{'ano':'1','comision':'1-2','modo':'Prac.','dia':'Jueves' ,'nombre':'Algebra', 'hora':'10.00', 'aula': 'Mayor 2'},
	
	{'ano':'1','comision':'1-2','modo':'Teor.','dia':'Viernes' , 'nombre':'Química','hora':'08.00', 'aula': 'Mayor 2'},
	{'ano':'1','comision':'2','modo':'Prac.','dia':'Viernes' , 'nombre':'Química','hora':'15.00', 'aula': 'Lab. Química'},
	{'ano':'1','comision':'1','modo':'Prac.','dia':'Viernes' , 'nombre':'Química','hora':'17.00', 'aula': 'Lab. Química'},
	{'ano':'1','comision':'1-2','modo':'Teor.','dia':'Viernes' , 'nombre':'Sist. de Repr.','hora':'19.00', 'aula': 'Mayor 2'},

	{'ano':'2','modo':'Teor.','dia':'Martes' ,'nombre':'Ingles I', 'hora':'08.00', 'aula': 'Aula 3'},
	{'ano':'2','modo':'Teor.','dia':'Martes' ,'nombre':'Analisis Mat II', 'hora':'15.00', 'aula': 'Martha Bienner'},
	{'ano':'2','modo':'Teor.','dia':'Martes' ,'nombre':'Programación I', 'hora':'18.00', 'aula': 'Aula 3'},

	{'ano':'2','modo':'Teor.','dia':'Miercoles' ,'nombre':'Ingles I', 'hora':'08.00', 'aula': 'Aula 3'},
	{'ano':'2','modo':'Prac.','dia':'Miercoles' ,'nombre':'Física II', 'hora':'15.00', 'aula': 'Lab. Física'},
	{'ano':'2','modo':'Prac.','dia':'Miercoles' ,'nombre':'Programacion I', 'hora':'18.00', 'aula': 'IDI'},
	
	{'ano':'2','modo':'Teor.','dia':'Jueves' ,'nombre':'Fisica II', 'hora':'08.00', 'aula': 'Martha Bienner'},
	{'ano':'2','modo':'Teor.','dia':'Jueves' ,'nombre':'Analisis Mat II', 'hora':'15.00', 'aula': 'Martha Bienner'},
	{'ano':'2','modo':'Teor.','dia':'Jueves' ,'nombre':'Programación I', 'hora':'18.00', 'aula': 'Aula 3'},
	{'ano':'2','modo':'Prac.','dia':'Jueves' ,'nombre':'Programación I', 'hora':'20.00', 'aula': 'IDI'},

	{'ano':'2','modo':'Teor.','dia':'Viernes' ,'nombre':'Fisica II', 'hora':'10.00', 'aula': 'Martha Bienner'},
	{'ano':'2','modo':'Prac.','dia':'Viernes' ,'nombre':'Mat. Discreta y log.', 'hora':'15.00', 'aula': 'Común 1'},
	{'ano':'2','modo':'Teor.','dia':'Viernes' ,'nombre':'Mat. Discreta y log.', 'hora':'19.00', 'aula': 'Aula 10'},

	{'ano':'3','modo':'Teor.','dia':'Lunes' ,'nombre':'Ingles II', 'hora':'08.00', 'aula': 'Aula 3'},
	{'ano':'3','modo':'Teor.','dia':'Lunes' ,'nombre':'Bases de Datos', 'hora':'15.00', 'aula': 'IDI'},

	{'ano':'3','modo':'Teor.','dia':'Martes' ,'nombre':'Bases de Datos', 'hora':'15.00', 'aula': 'IDI'},

	{'ano':'3','modo':'Teor.','dia':'Miercoles' ,'nombre':'Ingles II', 'hora':'10.00', 'aula': 'Aula 3'},
	{'ano':'3','modo':'Teor.','dia':'Miercoles' ,'nombre':'Analisis Numerico', 'hora':'15.00', 'aula': 'Común 1'},
	{'ano':'3','modo':'Teor.','dia':'Miercoles' ,'nombre':'Lenguajes Formales y automatas', 'hora':'19.00', 'aula': 'Común 2'},

	{'ano':'3','modo':'Teor.','dia':'Jueves' ,'nombre':'Teor. de la Inform. y comunicación I', 'hora':'08.00', 'aula': 'IDI'},
	{'ano':'3','modo':'Prac.','dia':'Jueves' ,'nombre':'Lenguajes Formales y automatas', 'hora':'15.00', 'aula': 'Común 1'},
	{'ano':'3','modo':'Prac.','dia':'Jueves' ,'nombre':'Sist. Operativos', 'hora':'17.00', 'aula': 'IDI'},
	{'ano':'3','modo':'Prac.','dia':'Jueves' ,'nombre':'Teor. de la Inform. y comunicación I', 'hora':'19.00', 'aula': 'IDI'},

	{'ano':'3','modo':'Prac.','dia':'Viernes' ,'nombre':'Analisis Numerico', 'hora':'16.00', 'aula': 'Aula 10'},
	{'ano':'3','modo':'Teor.','dia':'Viernes' ,'nombre':'Sist. Operativos', 'hora':'19.00', 'aula': 'IDI'},

	{'ano':'4','modo':'Teor.','dia':'Lunes' ,'nombre':'Organización Empresarial', 'hora':'15.00', 'aula': 'IDI'},
	{'ano':'4','modo':'Prac.','dia':'Lunes' ,'nombre':'Sist. Tiempo Real', 'hora':'17.00', 'aula': 'IDI'},
	{'ano':'4','modo':'Teor.','dia':'Lunes' ,'nombre':'Procesam. Dig. de Imag.(E)', 'hora':'19.00', 'aula': 'IDI'},
	{'ano':'4','modo':'Teor.','dia':'Lunes' ,'nombre':'Tecn. e ingeniería Web(E)', 'hora':'18.00', 'aula': 'IDI'},
	
	{'ano':'4','modo':'Teor.','dia':'Martes' ,'nombre':'Gest. del Conocimiento(E)', 'hora':'08.00', 'aula': 'IDI'},
	{'ano':'4','modo':'Teor.','dia':'Martes' ,'nombre':'Ing. Soft. II', 'hora':'15.00', 'aula': 'Aula 3'},
	{'ano':'4','modo':'Teor.','dia':'Martes' ,'nombre':'Tecn. e ingeniería Web(E)', 'hora':'17.00', 'aula': 'IDI'},

	{'ano':'4','modo':'Prac.','dia':'Miercoles' ,'nombre':'Procesam. Dig. de Imag.(E)', 'hora':'19.00', 'aula': 'IDI'},

	{'ano':'4','modo':'Prac.','dia':'Jueves' ,'nombre':'Ing. Soft. II', 'hora':'10.00', 'aula': 'IDI'},
	{'ano':'4','modo':'Teor.','dia':'Jueves' ,'nombre':'Organización Empresarial', 'hora':'15.00', 'aula': 'IDI'},
	{'ano':'4','modo':'Prac.','dia':'Jueves' ,'nombre':'Gest. del Conocimiento(E)', 'hora':'17.00', 'aula': 'IDI'},

	{'ano':'4','modo':'Teor.','dia':'Viernes' ,'nombre':'Sist. Tiempo Real', 'hora':'09.00(C/15 días)', 'aula': 'IDI'},

	{'ano':'5','modo':'Prac.','dia':'Lunes' ,'nombre':'Sist. Inteligentes', 'hora':'15.00', 'aula': 'Común 2'},
	{'ano':'5','modo':'Teor.','dia':'Lunes' ,'nombre':'Calidad en el proc. de prod. de soft.', 'hora':'17.00', 'aula': 'Box de Prof.'},

	{'ano':'5','modo':'Teor.','dia':'Martes' ,'nombre':'Auditoria Informatica', 'hora':'10.00', 'aula': 'IDI'},
	{'ano':'5','modo':'Prac.','dia':'Martes' ,'nombre':'Reingenieria de procesos', 'hora':'15.00', 'aula': 'IDI'},
	{'ano':'5','modo':'Prac.','dia':'Martes' ,'nombre':'Gestión en la web(E)', 'hora':'17.00', 'aula': 'IDI'},

	{'ano':'5','modo':'Teor.','dia':'Miercoles' ,'nombre':'Minería de datos(E)', 'hora':'15.00', 'aula': 'IDI'},
	{'ano':'5','modo':'Prac.','dia':'Miercoles' ,'nombre':'Calidad en el proc. de prod. de soft.', 'hora':'18.00', 'aula': 'Box de Prof.'},	

	{'ano':'5','modo':'Teor.','dia':'Jueves' ,'nombre':'Reingenieria de procesos', 'hora':'09.00(C/15 días)', 'aula': 'IDI'},
	{'ano':'5','modo':'Teor.','dia':'Jueves' ,'nombre':'Auditoria Informatica', 'hora':'18.00', 'aula': 'IDI'},

	{'ano':'5','modo':'Teor..','dia':'Viernes' ,'nombre':'Sist. Inteligentes', 'hora':'09.00(C/15)', 'aula': 'IDI'},
	{'ano':'5','modo':'Prac.','dia':'Viernes' ,'nombre':'Minería de datos(E)', 'hora':'16.00', 'aula': 'IDI'},
	{'ano':'5','modo':'Prac.','dia':'Viernes' ,'nombre':'Gestión en la web(E)', 'hora':'18.00', 'aula': 'IDI'},

]