<h1> FixMyArea </h1>
FixMyArea is a community-driven web application designed to empower citizens to report local infrastructural problems—such as potholes, faulty streetlights, overflowing waste bins, and water leaks—directly to relevant municipal or government agencies. Users can log in, pinpoint issues on a map, upload photos, and describe the problem. The system categorizes the report and forwards it to the appropriate department while allowing users to track the resolution status.

<h2> Goal </h2>
  - To foster civic engagement
  - Improve local services
  - Promote government accountability by streamlining the reporting process and maintaining transparency through
    real-time updates.

 <h2> Technologies Used </h2>
   <ul>
      <li><h3>Frontend</h3></li>
         <li> Vue.js</li>
	 <li>Google Maps</li>

      <li><h3>Backend</h3></li>
         <li>Python with Flask</li>

      <li><h3>Database</h3></li>
         <li>MySQL</li>

      <li><h3>Authentication</h3></li>
         <li>Javascript Web Token (JWT)</li>

      <li><h3>Other Tools/Services</h3></li>
         <li>Cloudinary (for image uploads)</li>
	 <li>Mailgun (for email notifications)</li>
   </ul>

<h2>Contributors</h2>
Otetumo Oluwaseun [Github: https://github.com/annyauthe4][email: annyauthe4@gmail.com][X/Twitter_handle: @annyauthe4]
Salu Oluwafikunayomi
Gemechis Chala
Alagbada Abiodun


<h3> Issues </h3>
During the cause of testing the created user model through the main file, the following error was generated upon running <code>$ python3 main.py</code>
<code>
  Traceback (most recent call last):
  File "/home/annyauthe4/ALX/FixMyArea/backend/main.py", line 12, in <module>
    app = create_app()
  File "/home/annyauthe4/ALX/FixMyArea/backend/app/__init__.py", line 22, in create_app
    from app.routes import register_routes
ModuleNotFoundError: No module named 'app.routes'
</code>
## Solution
 The routes directory was created and in its __init__.py file a placeholder function register_routes(app) was created to do nothing (pass)

Upon running it the second time, another error was generated:
<code>
  File "/home/annyauthe4/.local/lib/python3.10/site-packages/sqlalchemy/orm/clsregistry.py", line 501, in _raise_for_name
    raise exc.InvalidRequestError(
sqlalchemy.exc.InvalidRequestError: When initializing mapper Mapper[User(users)], expression 'Report' failed to locate a name ('Report'). If this is a class name, consider adding this relationship() to the <class 'app.models.user.User'> class after both dependent classes have been defined.
</code>
This error was as a result of the User model trying to define a relationship with the Report model.
However, as at the time User is being imported, the Report model has not been loaded yet - circular import issue.

# Solution
Import the Report model inside the user.py file after defining User.
Also ensure models __init__.py file imports all models correctly. This guarantees SQLAlchemy is aware of all models
during migrations.

At the 3rd running, the main.py file run successfully.

Worthy of noting is that the built-in memory was used for testing the SQLite database.
