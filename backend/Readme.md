# Crear y activar el entorno virtual
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

# Instalar dependencias
pip install django
pip install djangorestframework
pip install django-cors-headers
pip install psycopg2-binary

# Crear el proyecto Django
django-admin startproject cards_project .
django-admin startapp cards

# Crear y ejecutar las migraciones
python manage.py makemigrations
python manage.py migrate

# Crear superusuario
python manage.py createsuperuser

# Ejecutar el servidor
python manage.py runserver