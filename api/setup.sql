CREATE TABLE promotions (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    originalPrice DECIMAL(10,2),
    discountPrice DECIMAL(10,2),
    discount INT,
    image VARCHAR(255),
    startDate DATE,
    endDate DATE,
    showPrices BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar datos iniciales
INSERT INTO promotions (id, title, description, originalPrice, discountPrice, discount, image, startDate, endDate, showPrices) VALUES
('promo-keratina', 'Keratina Japonesa', 'Transforma tu cabello con nuestro tratamiento estrella', 2500, 1800, 28, '/images/services/japonesa.png', '2025-01-10', '2025-01-20', true),
('promo-laser', 'Alisado Láser', 'La última tecnología en alisado permanente', 3000, 2400, 20, '/images/services/Laser.png', '2025-01-10', '2025-01-20', true),
('promo-organico', 'Alisado Orgánico', 'Lo natural también puede ser extraordinario', 2000, 1500, 25, '/images/services/Alisado Organico.png', '2025-01-10', '2025-01-20', true);
