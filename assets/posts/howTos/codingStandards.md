---
title: Coding Standards and Programming Best Practices
description: How to produce well-engineered code
categories:
  - Post
---

It requires art, skill and effort to turn _working code_ into _well-engineered code_ that is efficient, reliable, and maintainable. However, producing well-engineered code is a worthwhile exercise, since, in the long run, it gives a high return on investment. This document specifies some best practices that help produce well-engineered code [^1].

[^1]: Thanks to Donavon West, at [American Express Developer Relations](https://americanexpress.io/clean-code-dirty-code/), and Tuukka Haapaniemi, at [http://www.dotnetspider.com](http://www.dotnetspider.com), for inspiring this document.

## Terminology

This document uses the terms _Pascal casing_ and _Camel casing_, whereby:

+ **Pascal casing** is where the first character of all words is Upper Case, and all other characters are lower case. For example, _BackColor_.
+ **Camel casing** is where the first character of all words is Upper Case, except the first word. All other characters are lower case. For example, _backColor_.

## Programming Best Practices

+ Use method names that are self-explanatory and require few (if any) comments.

+ Where possible, avoid complexity; in other words, [KISS](https://thevaluable.dev/kiss-principle-explained/) - _keep it simple, stupid_ (although, a former colleague of mine, tired of reviewing very-smart-but-overly-complex code, thought that last _s_ stood for _shithead_. But he was old and bitter)! KISS does not mean you are an idiot (or a shithead), it means that your code should be stupidly simple; so simple, anybody can understand what it is doing, to the degree that, when when you are no longer responsible for that piece of code, anyone can maintain your work.

+ For example, KISS means to avoid doing more than one job in a single method, even if those jobs are tiny:

Good:

```
void SaveAddress ( string _address )
{
    // Save the address.
}

void SendEmail ( string _address, string _email )
{
    // Send an email to inform the supervisor that the address is changed.
}

SaveAddress (  address );
SendEmail ( address, email );        
```

Bad:

```
void SaveAddress ( string _address, string _email )
{
    // Job 1.
    // Save the address.

    // Job 2.
    // Send an email to inform the supervisor that the address is changed.
}

SaveAddress ( address, email );
```

+ KISS also means avoiding writing very long methods.

+ Adhere to the principles of [DRY](https://thevaluable.dev/dry-principle-explained/) - _don't repeat yourself_ [^3]. That applies especially to **domain knowledge**, where domain knowledge refers to some precise functionality in the domain of your application. For instance, if your domain dictates  _x_, _y_, then _z_, and those steps are called many times from many places, _x_,  _y_, then _z_ should appear only once in your application. Consider the logic of your domain shifting, so the steps become _z_, _y_ then _x_. If those steps appeared in many places in your code then, to avoid bugs, you would have to update all occurrences of the duplicated knowledge. Instead, it's much better only to have to update that code in a single place.

[^3]: DRY originated in [The Pragmatic Programmer](https://www.nceclusters.no/globalassets/filer/nce/diverse/the-pragmatic-programmer.pdf); it is the general principle of avoiding repeat blocks of code by consolidating the duplication in a single method, which you can call repeatedly.

+ However, during the early stages of the development life cycle, code for the specific and don’t try to generalise. That may mean duplication! Indeed, duplication is far cheaper than the wrong abstraction. Hence, sometimes, it may be appropriate to code first, make it work, and when the knowledge is already (and obviously) duplicated, or if you see the same general patterns, consider refactoring to well-engineered, DRY domain knowledge. [Source code control](https://github.com/) and its branching mechanisms help, here. You are using [source code control](https://github.com/), right?

+ Always code for the unexpected. For example, if you are using a parameter which, at the time, only has two values, never assume that's always going to be the case:

```
if ( memberType == eMemberTypes.Registered )
{
    // Registered user. Do something.
}
else if ( memberType == eMemberTypes.Guest )
{
    // Guest user. Do something.
}
else
{
    // If in the future, someone introduces a new user type, we can easily find the problem here.
    throw new Exception ( “Unexpected value “ + memberType.ToString() )
}
```

+ Do not use global variables. Instead, pass and return variables between methods. Reading and writing to global variables has the propensity to result in buggy code that is difficult to trace.

+ Avoid making member variables public or protected; they should be declared private and only exposed via public/protected methods or properties, which set or get those private member variables.

+ Do not hardcode numbers. Use constants instead. Furthermore, declare those constants in a dedicated class. However, try and avoid littering your code with too many constants; only use them if you are sure that value never changes.

+ Similarly, do not hardcode strings. Similar to constants declare strings in dedicated classes.

+ To aid string comparisons, convert them to lowercase or upper case (unless, of course, the case is essential):

```

if ( memberSurname.ToLower() == guestSurname.ToLower() )
{
    // Is the guest related to a member? If so, offer a discount.
}
```

+ Try and represent discrete values by using an `enum`:

Good:

```
enum MailType
{
    Html,
    PlainText,
    Attachment
}

void SendMail ( string _message, MailType _mailType )
{
    switch ( _mailType )
    {
      case MailType.Html:
        // Do something with _message
        break;
      case MailType.PlainText:
        // Do something with _message
        break;
      case MailType.Attachment:
        // Do something with _message
        break;
      default:
        // Do something with _message
        break;
    }
}
```

Bad:

```
void SendMail ( string _message, string _mailType )
{
    switch ( _mailType )
    {
        case "Html":
          // Do something with _message
          break;
        case "PlainText":
          // Do something with _message
          break;
        case "Attachment":
          // Do something with _message
          break;
        default:
          //Do something with _message
          break;
    }
}
```

+ Never hardcode a path or drive name, since that is unlikely to be portable across environments. Get the application path programmatically. Use relative paths. Furthermore, similar to constants and strings, declare paths in special configuration classes.

+ If the application cannot find the required configuration file, it should be able to use default values.

+ When the application starts, do a "self-check" and ensure all required files and dependencies are available in the expected locations. For instance, if required, check for network connectivity or database connections. If that connectivity is insufficient to run the application, or there are errors, display a friendly message to the user, and exit gracefully.

+ An event handler should not contain the code to perform the required action. Instead, call another method from the event handler.

+ Do not programmatically click a button to execute the same action you have written in the button click event. Instead, call the same method that is called by the button click event handler.

+ Avoid passing too many parameters to a method. Indeed, a method with more than four or five parameters is a good candidate for refactoring; however, if those parameters are necessary (and related), pass them as a single array.

+ If you have a method returning some form of collection, and you have nothing to return, return an empty collection instead of null. For example, return a valid List with 0 items, because it is easy for the calling application to check the number of items in the List rather than doing an additional check for null.

+ If you are opening database connections, sockets, file stream etc. always close them in a `finally` block (or some such equivalent). That ensures all connections are closed safely and cleanly, even if an exception occurs.

## Naming

+ Use Pascal casing for class names:

```
public class HelloWorld
{
    // introduce yourself to the world
}
```

+ Use Pascal casing for method names:

```
public string SayHello ( string _firstName )
{
    // code to create greeting
}
```

+ Use Camel casing for method parameters and prefix them with an underscore:

```
public string SayHello ( string _firstName )
{
    // code to create greeting
}
```

+ Use Camel casing for variables:

```
public string SayHello ( string _firstName )
{
    string fullGreeting = helloPrefix + _firstName;
    return fullGreeting;
}
```

+ Use the prefix “I” with Pascal casing for interfaces. For example, `ILogging`.

+ Use Meaningful, descriptive words to name variables. Only use commonly-used abbreviations and avoid, where possible, names that resemble keywords:

Good:

```
string name;
string address;
int salary;
```

Bad:

```
string nam;
string addr;
int sal;
```

+ Only use single-character or abbreviated variable names like _i_, _n_, _x_ where appropriate. An example are the index variables used as counters in loops, and the variables _x_ and _xs_ of the lambda calculus, which would be commonly understood. Your domain may have similar conventions.

```
for ( int i = 0; i < countNames; i++ )
{
    Console.WriteLine(name[i]);
}
```

+ Prefix boolean variables with _is_, _has_, or _should_ (or other similar prefixes):

```
private bool isFinished;
```

+ Use the _ui_ prefix for user interface elements:

```
Button uiConfirmEntries = new Button();
```

+ File names should use lower case and match the class name. For example, the C# class _HelloWorld_ should be defined in the file _helloworld.cs_. Furthermore, a file should contain a single class.

## Indentation, Spacing and Layout

+ Use TAB for indentation. Do not use SPACES. Define the Tab size as four.

+ If you must write comments, they should be at the same level as the associated code:

Good:

```
// Format a greeting before displaying it
string greeting = helloPrefix + _firstName;
DateTime currentTime = DateTime.Now;
string fullGreeting = greeting + timeIsString + currentTime.ToShortTimeString();
MessageBox.Show ( fullGreeting );
```

Bad:

```
// Format a greeting before displaying it
    string greeting = helloPrefix + _firstName;
    DateTime currentTime = DateTime.Now;
    string fullGreeting = greeting + timeIsString + currentTime.ToShortTimeString();
    MessageBox.Show ( fullGreeting );
```

+ Curly braces, _{}_, should be at the same level as the code outside those braces:

```
if ( isNight )
{
    // sleep
} else
{
    // ride a bike
}
```

+ The curly braces should be on a separate line and not on the same line as `if`, `for` etc. That borrows an edict from design, which considers [white space](https://blog.prototypr.io/importance-of-white-space-in-design-5a40c0e65bfd) as a good since it aids readability:

Good:

```
if ( isDay )
{
    // Do something
}
```

Bad:

```
if ( isDay )    {
    // Do something
}
```

+ Use a blank line to separate logical groups of code:

Good:

```
public string SayFriendlyHello ( bool _isFriend, string _firstName )
{
    string greeting = "";

    if ( _isFriend )
    {        
        DateTime currentTime = DateTime.Now;
        greeting += helloPrefix + _firstName + timeIsString + currentTime.ToShortTimeString()
    }

    return greeting;
}
```

Bad:

```
public string SayFriendlyHello ( bool _isFriend, string _firstName )
{
    string greeting = "";
    if ( _isFriend )
    {        
        DateTime currentTime = DateTime.Now;
        greeting += helloPrefix + _firstName + timeIsString + currentTime.ToShortTimeString()
    }
    return greeting;
}
```

+ There should be one and only one single blank line between each method inside a class.

+ Use a single space before and after each operator and brackets:

Good:

```
if ( showResult )
{
    for ( int i = 0; i < countNames; i++ )
    {
        // do something
    }
}
```

Bad:

```
if(showResult)
{
    for(int i= 0;i<10;i++)
    {
        //dosomethingclaustrophobic
    }
}
```

+ Keep private member variables, properties and methods at the top of a class definition, and public members towards the bottom.  

+ Declare variables as close as possible to where they are first used. Use one variable declaration per line.

## Comments

Meaningful comments can make code more maintainable. However:

+ Write clean, readable code in such a way that, to understand it, it doesn't need many (if any) comments.

+ Indeed, meaningful class, method and variable names clarify intentions. Such code does not need many (if any) comments.

+ If you must write comments, keep them concise.

+ Try and avoid multiline comments - see above.

+ The drawback of having many comments is they require maintaining. For example, if you change the code, you must also change the associated comment.

+ However, comment code about which you are unsure. For example, if you have to use some complex logic for any reason, document it very well with sufficient comments. Doing so may help clarify your thought process.

+ Perform spell checks on comments and also make sure you use proper grammar and punctuation.

+ If you initialise a numeric variable to a unique number other than 0, -1 etc. comment the reason for choosing that value.

+ If you are no longer using a block of code, do not comment it out; that confuses anyone needing to maintain the code later. Remove the code and rely on the mechanisms of [source code control](https://github.com/). You are using [source code control](https://github.com/), right?

## Architecture

+ Logically organise all your files within appropriately named folders, which, to aid portability should use lower case. Whatever folder organisation scheme you decide upon, keep it consistent throughout.

+ If possible, avoid having large source files as they are challenging to maintain.

+ Use the principles of [low coupling](https://www.geeksforgeeks.org/software-engineering-coupling-and-cohesion/) and [N-tier architecture](https://stackify.com/n-tier-architecture/), whereby the software is engineered to have the processing, data management, and presentation functions physically and logically separated. For example, never access third-party APIs, such as databases, directly from the UI. Instead, have some specific class which performs all those third-party related tasks; if you choose to migrate to another API at some point, that should ease the pain of the migration. The general idea is to separate stateful aspects from rendering.

## Error Handling

+ Have a _logging class_ which is used throughout an application as the only means to log exceptions, errors, warning or traces. Write that class in such a way that in future you can easily change it to send to a log, to a database, fire off an email to an administrator, all of the above or whatever, without any change in any other part of the application. That should also help troubleshoot any problems.

+ Keep application messages concise and friendly. However, log the actual error with all possible information that helps diagnose the problem. In other words, error messages should fulfil two functions, 1) tell the user that something has gone wrong, and 2) help solve the problem. Never give error messages like "Error in Application", "There is an error" etc. Instead, give specific messages like "Failed to update the database. Please ensure the login id and password are correct."

+ Never trust third-party APIs and external systems such as networks, databases, and hardware devices. Such systems may be subject to failure, and their error checking routines may not be reliable. Therefore, enclose communications with those systems in try-catch blocks so you can catch any exceptions. Log those to that specialised _logging class_, which records the name of the executed command, its parameters etc. After recording the exception, it can be thrown again so that another layer in the application can catch it and take appropriate action.

+ Never perform a 'catch exception and do nothing', since you may not know if an exception occurs if you hide it, and that could mean missing a significant issue. If you can do nothing else, at least log the exception and proceed.

+ Do not write large try-catch blocks. If required, write separate try-catch for each task you perform and enclose only the specific piece of code inside the try-catch. That helps identify specific pieces of code that generated the exception. Furthermore, you can give specific error messages to the user.

+ At the method-level, catch the specific exception, not the generic exception:

Good:

```
void ReadFromFile ( string _fileName )
{
    try
    {
        // read from file.
    }
    catch ( FileIOException  _ex )
    {
        // log error.
        //  re-throw exception depending on your case.
        throw;
    }
}
```

Bad:

```
void ReadFromFile ( string _fileName )
{
    try
    {
        // read from file.
    }
    catch ( Exception _ex )
    {
      // Catching a general exception is bad.
      // Was it a file error or some other error?
      // In effect, you are hiding the actual exception.
      return "";        
    }
}
```

+ When you throw an exception, use the throw statement without specifying the original exception. This way, the original call stack is preserved:

Good:

```
catch
{
    // do whatever you want to handle the exception
    throw;
}
```

Bad:

```
catch ( Exception _ex )
{
    // do whatever you want to handle the exception
    throw _ex;
}
```

+ However, do not rely on try-catch in all your methods - you should always try to avoid exceptions by checking all the error conditions programmatically. Use exceptions only if there is a possibility that a specific exception may occur and you cannot circumvent it by any other means. For example, if you want to insert a new record in a database, you should first try to select that record and only perform the insertion if it does not exist. Do not rely on a 'record exists' exception.

+ During development, your application does not necessarily need to catch exceptions. During the development cycle, it is perfectly valid to let the application crash, since that should help identify, and circumvent, most of the errors.

+ During production, though, have an application-level error handler where you handle general exceptions. In case of an 'unexpected general error', this error handler should catch the exception and log the error in addition to giving a friendly message to the user before closing the application, or allow the user to 'ignore and proceed'. The log should help address any bugs.

## Tools

+ Use a capable IDE, suitable for your environment. Know that IDE well, and use it productively; it should be a breeze to stop execution at a breakpoint and examine the call stack and associated variables (do remember, however, that sometimes, a simple `Console.WriteLine(whatIsMyVariableValue);` can reveal all ;)

+ Use an appropriate [linter](https://atom.io/packages/linter) for your language and follow strict linting rules (such as those specified above). That helps you write clean, consistent code.

+ You are using [source code control](https://github.com/), right?

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
