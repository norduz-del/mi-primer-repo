-- Crea la tabla, si todavía no existe
CREATE TABLE IF NOT EXISTS personas (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    correo TEXT,
    ciudad TEXT,
    edad INTEGER
);

-- Borra los datos anteriores, para que el script se pueda ejecutar varias veces
DELETE FROM personas;

-- Inserta las 10 personas
INSERT INTO personas (id, nombre, correo, ciudad, edad) VALUES
    (1, 'Ana Martínez', 'ana@ejemplo.com', 'Bogotá', 28),
    (2, 'Luis Rodríguez', 'luis@ejemplo.com', 'Medellín', 34),
    (3, 'Carla Gómez', 'carla@ejemplo.com', 'Cali', 22),
    (4, 'Mateo Pérez', 'mateo@ejemplo.com', 'Pereira', 41),
    (5, 'Sofía Ramírez', 'sofia@ejemplo.com', 'Barranquilla', 25),
    (6, 'Andrés Torres', 'andres@ejemplo.com', 'Cartagena', 30),
    (7, 'Valentina Díaz', 'valentina@ejemplo.com', 'Bogotá', 19),
    (8, 'Diego Herrera', 'diego@ejemplo.com', 'Manizales', 37),
    (9, 'Laura Castro', 'laura@ejemplo.com', 'Tunja', 29),
    (10, 'Javier Ortiz', 'javier@ejemplo.com', 'Medellín', 45);
