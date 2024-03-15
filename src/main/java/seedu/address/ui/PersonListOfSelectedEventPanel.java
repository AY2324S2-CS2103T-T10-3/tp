package seedu.address.ui;

import java.util.logging.Logger;

import javafx.collections.ListChangeListener;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.ListCell;
import javafx.scene.control.ListView;
import javafx.scene.layout.Region;
import seedu.address.commons.core.LogsCenter;
import seedu.address.model.person.Person;

/**
 * Panel containing the list of persons.
 */
public class PersonListOfSelectedEventPanel extends UiPart<Region> {
    private static final String FXML = "PersonListOfSelectedEventPanel.fxml";
    private final Logger logger = LogsCenter.getLogger(PersonListOfSelectedEventPanel.class);

    @FXML
    private ListView<Person> personListView;

    @FXML
    private Label emptyListLabel;

    /**
     * Creates a {@code PersonListPanel} with the given {@code ObservableList}.
     */
    public PersonListOfSelectedEventPanel(ObservableList<Person> personList) {
        super(FXML);
        personListView.setItems(personList);
        personListView.setCellFactory(listView -> new PersonListOfSelectedEventViewCell());

        // Add a listener to the personList to handle visibility of personListView and emptyListLabel
        personList.addListener((ListChangeListener<Person>) change -> updateListView());

        // Initial call to set the correct visibility state when the panel is first created
        updateListView();
    }

    /**
     * Updates the visibility of personListView and emptyListLabel based on the list's emptiness.
     */
    private void updateListView() {
        boolean isEmpty = personListView.getItems().isEmpty();
        personListView.setVisible(!isEmpty);
        personListView.setManaged(!isEmpty);
        emptyListLabel.setVisible(isEmpty);
        emptyListLabel.setManaged(isEmpty);
    }

    /**
     * Custom {@code ListCell} that displays the graphics of a {@code Person} using a {@code PersonCard}.
     */
    class PersonListOfSelectedEventViewCell extends ListCell<Person> {
        @Override
        protected void updateItem(Person person, boolean empty) {
            super.updateItem(person, empty);

            if (empty || person == null) {
                setGraphic(null);
                setText(null);
            } else {
                setGraphic(new PersonCard(person, getIndex() + 1).getRoot());
            }
        }
    }
}