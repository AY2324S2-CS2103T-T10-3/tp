
    var pageVueRenderFn = function noop (a, b, c) {};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"eventy-user-guide"}},[_v("Eventy User Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#eventy-user-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"introduction"}},[_v("Introduction"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#introduction","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Eventy")]),_v(" is a contact management application which offers a new standard of streamlined and automated contact organization.\nEventy is a combination of Command Line Interface(CLI) and Graphical User Interface(GUI), which entails both fast typing\nand visual representation.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The application is "),_c('strong',[_v("tailored specifically for student event organizers")]),_v(", providing great benefits to event planning.\nHowever, with the versatility and flexibility of the application, anyone can use it with ease.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Bid farewell to troublesome event management")]),_v(" as Eventy will serve as your single source of truth\nfor storing, managing, planning and retrieving all contact-related information.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"1-quick-start"}},[_v("1. Quick start"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-quick-start","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Ensure you have Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(" or above installed in your Computer.")])]),_v(" "),_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("eventy.jar")]),_v(" from "),_c('a',{attrs:{"href":"https://github.com/AY2324S2-CS2103T-T10-3/tp/releases"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Copy the file to the folder you want to use as the "),_c('em',[_v("home folder")]),_v(" for your Eventy.")])]),_v(" "),_c('li',[_c('p',[_v("Open a command terminal, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(" into the folder you put the jar file in, and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar eventy.jar")]),_v(" command to run the application."),_c('br'),_v("\nA GUI similar to the below should appear in a few seconds. Note how the app contains some sample data."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/Ui.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/Ui.png","alt":"Ui"}})])])]),_v(" "),_c('li',[_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#3-features"}},[_v("Features")]),_v(" below for details of each command.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"2-ui-layout-description"}},[_v("2. UI Layout Description"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-ui-layout-description","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/UILayout.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/UILayout.png","alt":"UiLayout"}})])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("Command Box:")]),_v(" Box for users to input the command to be executed by Eventy.")]),_v(" "),_c('li',[_c('strong',[_v("Result Display Box:")]),_v(" Box that displays the result of executing the entered command.")]),_v(" "),_c('li',[_c('strong',[_v("Event List:")]),_v(" Box that displays the all the events being planned.")]),_v(" "),_c('li',[_c('strong',[_v("Event Participant List:")]),_v(" Box that displays all the participants in the selected event.")]),_v(" "),_c('li',[_c('strong',[_v("Global Participant List:")]),_v(" Box that displays all the contacts saved.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"3-features"}},[_v("3. Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"3-1-event-management"}},[_v("3.1 Event Management"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-1-event-management","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-1-1-creating-an-event-addev"}},[_v("3.1.1 Creating an event: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addev")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-1-1-creating-an-event-addev","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addev ev/<EVENT NAME> d/<DATE>")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addev ev/Hall dining d/07-08-2024")]),_v(" adds a new event with the name "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hall Dining")]),_v(", with the date August 7th, 2024.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/beforeaddev.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/beforeaddev.png","alt":"before adding event"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/addev.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/addev.png","alt":"after adding event"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-1-2-editing-an-event-editev"}},[_v("3.1.2 Editing an event: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editev")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-1-2-editing-an-event-editev","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editev <EVENT INDEX> [ev/<EVENT NAME>] [d/<DATE>]")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editev 1 ev/Orientation camp")]),_v(" changes the event name of event indexed 1 to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Orientation camp")]),_v(".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editev 3 d/08-09-2024")]),_v(" changes the event date of event indexed 3 to September 8th, 2024.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editev 7 ev/Party d/08-09-2024")]),_v(" changes the event name and date of event indexed 7 to Party and September 8th, 2024.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-1-3-deleting-an-event-delev"}},[_v("3.1.3 Deleting an event: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delev")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-1-3-deleting-an-event-delev","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delev <EVENT INDEX>")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delev 1")]),_v(" deletes the 1st event in the displayed list.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-1-4-selecting-an-event-sel"}},[_v("3.1.4 Selecting an event: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sel")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-1-4-selecting-an-event-sel","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sel <EVENT INDEX>")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sel 3")]),_v(" selects the 3rd event.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/beforesel.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/beforesel.png","alt":"before selecting event"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/aftersel.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/aftersel.png","alt":"after selecting event"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-1-5-deselecting-an-event-desel"}},[_v("3.1.5 Deselecting an event: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("desel")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-1-5-deselecting-an-event-desel","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("desel")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("After "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("select 3")]),_v(" which selects the event with index "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("3")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("desel")]),_v(" deselects the event indexed "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("3")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"3-2-contact-management"}},[_v("3.2 Contact Management"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-2-contact-management","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-2-1-adding-person-and-their-information-to-the-global-participant-list-addp"}},[_v("3.2.1 Adding person and their information to the global participant list: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addp")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-2-1-adding-person-and-their-information-to-the-global-participant-list-addp","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addp n/<PARTICIPANT NAME> p/<PHONE NUMBER> e/<EMAIL> a/<ADDRESS> [t/<TAGS>]...")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addp n/David p/98987676 e/david@example.com a/NUS t/student")]),_v(" adds a participant named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("David")]),_v("\nwith the phone number "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("98987676")]),_v(" and email of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("david@example.com")]),_v(" to the displayed contacts list.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-2-2-inviting-person-to-selected-event-inv"}},[_v("3.2.2 Inviting person to selected event: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("inv")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-2-2-inviting-person-to-selected-event-inv","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("inv <PARTICIPANT INDEX>")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("inv 5")]),_v(" Adds participant indexed 5 to selected event.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/beforeinvite.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/beforeinvite.png","alt":"before inviting participant"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/afterinvite.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/afterinvite.png","alt":"after inviting participant"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-2-3-deleting-a-participant-from-the-global-participant-list-or-an-event-participant-list-delp"}},[_v("3.2.3 Deleting a participant from the global participant list or an event participant list: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delp")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-2-3-deleting-a-participant-from-the-global-participant-list-or-an-event-participant-list-delp","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delp <PARTICIPANT INDEX>")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("If "),_c('strong',[_v("no event is selected")]),_v(", this deletes the person from only the "),_c('strong',[_v("global participant list")]),_v(", but the person will\nremain in all the events he/she will be taking or has taken part in.")]),_v(" "),_c('li',[_v("If "),_c('strong',[_v("an event is selected")]),_v(", this only removes the participant from the event by "),_c('strong',[_v("his/her index in the\nevent participant list")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When no event is selected, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delp 9")]),_v(" deletes the 9th participant from the global participant list only.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delp 9")]),_v(" after "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sel 3")]),_v(" removes the 9th participant from the 3rd event's participant list.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-2-4-editing-existing-participant-editp"}},[_v("3.2.4 Editing existing participant: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editp")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-2-4-editing-existing-participant-editp","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editp <PARTICIPANT INDEX> [n/<PARTICIPANT NAME>] [p/<PHONE NUMBER>] [e/<EMAIL>] [a/<ADDRESS>] [t/<TAGS>]...")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editp 5 n/Max p/00000000 e/test@gmail.com")]),_v(" Edits contact details of participant indexed 5.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"3-3-export-function"}},[_v("3.3 Export function"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-3-export-function","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-3-1-exporting-the-chosen-details-of-all-the-filtered-persons-to-a-csv-file-export"}},[_v("3.3.1 Exporting the chosen details of all the filtered persons to a CSV file: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-3-1-exporting-the-chosen-details-of-all-the-filtered-persons-to-a-csv-file-export","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export [n/] [p/] [e/] [a/]")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Exports only the chosen details of all filtered persons to a CSV file. Currently, the command only supports the export\nof name, phone, email and address. The command will not support the export of tags due to privacy concerns and rare\nusage. The exported information will be in the file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exported_participant_data.csv")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export n/")]),_v(" exports only the names of all the filtered persons.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export n/ p/")]),_v(" exports only the names and phone numbers of all the filtered persons.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export n/ p/ e/")]),_v(" exports only the names, phone numbers and emails of all the filtered persons.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export n/ p/ e/ a/")]),_v(" exports the names, phone numbers, emails and addresses of all the filtered persons.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"3-4-other-commands"}},[_v("3.4 Other commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-4-other-commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-4-1-clearing-all-entries-clear"}},[_v("3.4.1 Clearing all entries: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-4-1-clearing-all-entries-clear","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-4-2-locating-persons-by-name-find"}},[_v("3.4.2 Locating persons by name: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-4-2-locating-persons-by-name-find","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find n/KEYWORD [MORE_KEYWORDS]")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find t/KEYWORD t/[MORE_KEYWORDS]")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find n/KEYWORD [MORE_KEYWORDS] t/KEYWORD t/[MORE_KEYWORDS]")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("If "),_c('strong',[_v("no event is selected")]),_v(", this finds the person by their names or/and tags from the "),_c('strong',[_v("global participant list")]),_v(".")]),_v(" "),_c('li',[_v("If "),_c('strong',[_v("an event is selected")]),_v(", this finds the person by their names or/and tags from the "),_c('strong',[_v("event participant list")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("The search by name is case-insensitive. e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hans")]),_v(" will match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans")])])]),_v(" "),_c('li',[_c('p',[_v("The search by tag is case-sensitive. e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("friends")]),_v(" will not match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Friends")])])]),_v(" "),_c('li',[_c('p',[_v("The order of the name/tag does not matter. e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans Bo")]),_v(" will match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Bo Hans")])])]),_v(" "),_c('li',[_c('p',[_v("Only full names/tags will be matched e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Han")]),_v(" will not match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Format 1:")]),_v(" Persons matching at least one name will be returned (i.e. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OR")]),_v(" search).\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans Bo")]),_v(" will return "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans Gruber")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Bo Yang")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Format 2:")])]),_v(" "),_c('ol',[_c('li',[_v("For find with one tag given, all persons with the tags will be returned (i.e. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OR")]),_v(" search).")]),_v(" "),_c('li',[_v("For find with multiple tags given, person matching all tags will be returned (i.e. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AND")]),_v(" search).")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Format 3:")]),_v(" Person matching the name and tags will be returned.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find n/John")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("john")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("John Doe")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find n/alex david")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Alex Yeoh")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("David Li")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find t/friends")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("john")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("David")]),_v(", who contain "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("friends")]),_v(" tag.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find t/friends t/collegues")]),_v("  returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("john")]),_v(", who contains "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("friends")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("colleagues")]),_v(" tags.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find n/Alex t/friends t/teacher")]),_v("  returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Alex")]),_v(", who contains "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("friends")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("teacher")]),_v(" tags."),_c('br')])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/findAlexDavidResult.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/findAlexDavidResult.png","alt":"result for 'find alex david'"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-4-3-viewing-help-help"}},[_v("3.4.3 Viewing help: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-4-3-viewing-help-help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/helpMessage.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/helpMessage.png","alt":"help message"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-4-4-listing-all-persons-list"}},[_v("3.4.4 Listing all persons: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-4-4-listing-all-persons-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Description:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("If "),_c('strong',[_v("no event is selected")]),_v(", this shows a list of all persons in the "),_c('strong',[_v("global participant list")]),_v(".")]),_v(" "),_c('li',[_v("If "),_c('strong',[_v("an event is selected")]),_v(", this shows a list of all persons in the "),_c('strong',[_v("event participant list")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"3-4-5-exiting-the-program-exit"}},[_v("3.4.5 Exiting the program: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-4-5-exiting-the-program-exit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"4-faq"}},[_v("4. FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#4-faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I transfer my data to another Computer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Install the app in the other computer and overwrite the empty data file it creates with the file that contains the data of your previous AddressBook home folder.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"5-known-issues"}},[_v("5. Known issues"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#5-known-issues","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("When using multiple screens")]),_v(", if you move the application to a secondary screen, and later switch to using only the primary screen, the GUI will open off-screen. The remedy is to delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferences.json")]),_v(" file created by the application before running the application again.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"6-command-summary"}},[_v("6. Command summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#6-command-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Format, Examples")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Add Event")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addev ev/<event name> d/<date>")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addev ev/Hall dining d/07-08-2024")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Edit Event")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editev INDEX ev/<event name> d/<date>")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editev 1 ev/Party")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Delete Event")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delev <index>")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delev 1")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Add Participant")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addp n<participant name> p/<phone number> e/<email> a/<address> t/<tags>")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addp n/David p/98987676 e/david@example.com a/NUS t/friends")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Selecting Event")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sel <event index>")]),_v(" "),_c('br'),_v(" e.g., `sel")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Deselecting Event")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("desel")]),_v(" deselect the current selected event")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Deleting a participant from global list")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delp 3")]),_v(" delete the 3rd participant from the global participant list")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Deleting a participant from an event")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delp 3")]),_v(" delete the 3rd participant from event list of selected event")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Edit existing participant")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editp 5 n/Max p/00000000 e/test@gmail.com a/NUS t/friends")]),_v(" Edits contact details of participant indexed 5")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Invite person to a selected event")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("inv 5")]),_v(" Adds participant indexed 5 to selected event")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Locating persons by name/tag")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find n/John t/friends")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("john")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Clear all entries")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" clear all entries from eventy")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Viewing help")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" Shows a message explaining how to access the help page")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Listing all persons")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" Shows a list of all persons in the address book.")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Exiting the program")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" Exits the program")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"7-prefix-translation-table"}},[_v("7. Prefix translation table"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#7-prefix-translation-table","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Prefix")]),_v(" "),_c('th',[_v("Translation")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("n/")]),_v(" "),_c('td',[_v("Name")])]),_v(" "),_c('tr',[_c('td',[_v("p/")]),_v(" "),_c('td',[_v("Phone number")])]),_v(" "),_c('tr',[_c('td',[_v("e/")]),_v(" "),_c('td',[_v("Email")])]),_v(" "),_c('tr',[_c('td',[_v("a/")]),_v(" "),_c('td',[_v("Address")])]),_v(" "),_c('tr',[_c('td',[_v("t/")]),_v(" "),_c('td',[_v("Tags")])]),_v(" "),_c('tr',[_c('td',[_v("ev/")]),_v(" "),_c('td',[_v("Event name")])]),_v(" "),_c('tr',[_c('td',[_v("d/")]),_v(" "),_c('td',[_v("Event date")])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")]),_v(", generated on Thu, 11 Apr 2024, 0:04:08 GMT+8]")])])])}
}];
  