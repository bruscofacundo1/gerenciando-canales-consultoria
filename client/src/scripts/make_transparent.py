from PIL import Image
import os

def make_white_transparent(input_path, output_path, tolerance=20):
    """
    Convierte el fondo blanco de una imagen a transparente.
    """
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        new_data = []
        for item in datas:
            # Comprobar si el color es blanco o casi blanco dentro de la tolerancia
            r, g, b, a = item
            if r > 255 - tolerance and g > 255 - tolerance and b > 255 - tolerance:
                # Cambiar a transparente
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(output_path)
        print(f"Fondo transparente aplicado a: {output_path}")
    except Exception as e:
        print(f"Error procesando {input_path}: {e}")

# Rutas de los archivos
base_dir = "/home/ubuntu/upload/gerenciando-canales-consultoria/client/public/images"
logo_full_path = os.path.join(base_dir, "logo-gc-full.png")
favicon_path = os.path.join(base_dir, "favicon.png")

# Procesar logo completo
make_white_transparent(logo_full_path, logo_full_path)

# Procesar favicon
make_white_transparent(favicon_path, favicon_path)
