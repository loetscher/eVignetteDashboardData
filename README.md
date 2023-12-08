# eVignetteDashboardData

Workaround for https://www.bazg.admin.ch/bazg/en/home/information-individuals/documents-for-travellers-and-road-taxes/vignette-autobahngebuehren/faq-vignette.html:
>My ticket is not visible in the webshop?"
> 
>*__Solange der Internetverlauf nicht gelöscht wird__, ist das Ticket unter dem entsprechenden Symbol oben rechts auf dem Gerät,
mit welchem der Kauf erfolgte, ersichtlich.
Bei registrierten Nutzern ist ein Ticket nach erfolgter Anmeldung (auf jedem Gerät) ersichtlich.
For more information about ePortal registration: [Registration for the digital services of Swiss Customs on ePortal (Onboarding)](https://www.bazg.admin.ch/bazg/en/home/services/services-companies/registrierung-firmen/onboarding.html).*

It looks like the purchase receipt stays in the browser memory. If the memory is cleared (or lost) a change of the number plate seems a bit of a challenge...

---

There are two [bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet) available under ```dist/``` folder for import/export eVignette Dashboard data.


1. Add the export bookmarklet (dist/export.txt) to the browser you want to export data from (this has to be the same browser you purchased the eVignette).
Browse to https://via.admin.ch/shop/dashboard and run the export bookmarklet. Save should start automatically and a file named ```eVignetteDashboard.json``` should be downloaded.
2. Open the browser in which you want to import the data and add the import bookmarklet (dist/import.txt). Run it and paste the content from the saved ```eVignetteDashboard.json``` file to the text field. Note: the localStorage will be overwritten if there is already an entry which is also part of the ```eVignetteDashboard.json``` file.

---
You can also use vanilla JavaScript (under ```src/dashboard/js-console```) to do the transfer manually by using your browser's developer console.

---
