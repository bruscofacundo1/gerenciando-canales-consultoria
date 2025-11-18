# Configuración de EmailJS para Formulario de Contacto

Este documento explica cómo configurar EmailJS para que el formulario de contacto envíe emails reales a tu correo.

## ¿Qué es EmailJS?

EmailJS es un servicio gratuito que permite enviar emails directamente desde JavaScript sin necesidad de un servidor backend. Es perfecto para sitios web estáticos como este.

## Pasos para Configurar EmailJS

### 1. Crear Cuenta en EmailJS (5 minutos)

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" (Registrarse)
3. Crea una cuenta gratuita con tu email
4. Verifica tu email

**Plan Gratuito:** 200 emails/mes (suficiente para empezar)

### 2. Conectar tu Servicio de Email (3 minutos)

1. Una vez dentro, ve a **"Email Services"** en el menú lateral
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email:
   - **Gmail** (recomendado para empezar)
   - Outlook
   - Yahoo
   - Otros

4. Para Gmail:
   - Haz clic en "Connect Account"
   - Inicia sesión con tu cuenta de Gmail
   - Autoriza a EmailJS
   - Dale un nombre al servicio (ej: "Gerenciando Canales Gmail")
   - Guarda el **Service ID** que aparece (ej: `service_abc123`)

### 3. Crear Plantilla de Email (5 minutos)

1. Ve a **"Email Templates"** en el menú lateral
2. Haz clic en **"Create New Template"**
3. Configura la plantilla:

**Subject (Asunto):**
```
Nuevo mensaje de contacto de {{from_name}}
```

**Content (Contenido):**
```
Has recibido un nuevo mensaje desde el sitio web de Gerenciando Canales.

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}

Mensaje:
{{message}}

---
Este email fue enviado automáticamente desde el formulario de contacto.
```

4. En **Settings**:
   - **From Name:** Gerenciando Canales - Formulario Web
   - **To Email:** TU_EMAIL@gmail.com (el email donde quieres recibir los mensajes)
   - **Reply To:** {{from_email}} (para poder responder directamente al cliente)

5. Haz clic en **"Save"**
6. Guarda el **Template ID** que aparece (ej: `template_xyz789`)

### 4. Obtener tu Public Key (1 minuto)

1. Ve a **"Account"** en el menú lateral
2. En la sección **"API Keys"**, encontrarás tu **Public Key**
3. Cópiala (ej: `AbCdEfGhIjKlMnOp`)

### 5. Actualizar el Código (2 minutos)

Abre el archivo `client/src/components/sections/ContactSection.tsx` y reemplaza estas líneas (aproximadamente línea 23-25):

```typescript
const EMAILJS_SERVICE_ID = "TU_SERVICE_ID"; // Reemplazar con tu Service ID
const EMAILJS_TEMPLATE_ID = "TU_TEMPLATE_ID"; // Reemplazar con tu Template ID
const EMAILJS_PUBLIC_KEY = "TU_PUBLIC_KEY"; // Reemplazar con tu Public Key
```

Por tus credenciales reales:

```typescript
const EMAILJS_SERVICE_ID = "service_abc123"; // Tu Service ID real
const EMAILJS_TEMPLATE_ID = "template_xyz789"; // Tu Template ID real
const EMAILJS_PUBLIC_KEY = "AbCdEfGhIjKlMnOp"; // Tu Public Key real
```

### 6. Probar el Formulario

1. Guarda los cambios
2. Recarga el sitio web
3. Completa el formulario de contacto
4. Haz clic en "Enviar Mensaje"
5. Deberías recibir el email en tu bandeja de entrada en menos de 1 minuto

## Solución de Problemas

### No recibo los emails

1. **Revisa la carpeta de Spam** - A veces los primeros emails van ahí
2. **Verifica las credenciales** - Asegúrate de copiar correctamente los IDs
3. **Revisa la consola del navegador** - Presiona F12 y busca errores en la pestaña "Console"
4. **Verifica el límite de emails** - El plan gratuito tiene 200 emails/mes

### Error "Invalid Public Key"

- Verifica que copiaste correctamente el Public Key desde tu cuenta de EmailJS
- Asegúrate de no incluir espacios antes o después

### Error "Template not found"

- Verifica que el Template ID sea correcto
- Asegúrate de que la plantilla esté guardada y activa en EmailJS

## Alternativas a EmailJS

Si prefieres otras opciones:

1. **Formspree** - Similar a EmailJS, también gratuito
2. **Web3Forms** - Sin registro, solo necesitas un email
3. **SendGrid** - Más profesional, requiere más configuración
4. **Resend** - Moderno y fácil de usar

## Contacto

Si tienes problemas con la configuración, puedes:
- Revisar la documentación oficial: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Ver tutoriales en YouTube buscando "EmailJS tutorial español"
- Contactar al soporte de EmailJS (responden rápido)

---

**Tiempo total estimado:** 15-20 minutos
**Costo:** Gratis (hasta 200 emails/mes)
**Dificultad:** Fácil ⭐⭐☆☆☆
