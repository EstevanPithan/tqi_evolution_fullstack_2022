package br.com.tqi.bookstore.test.service;

import br.com.tqi.bookstore.test.builder.BookBuilder;
import br.com.tqi.bookstore.test.builder.ItensEntryBuilder;
import br.com.tqi.bookstore.controller.mapper.ItensEntryMapper;
import br.com.tqi.bookstore.exception.IdNotFoundException;
import br.com.tqi.bookstore.exception.NameAlreadyRegisteredException;
import br.com.tqi.bookstore.model.Book;
import br.com.tqi.bookstore.model.ItensEntry;
import br.com.tqi.bookstore.repository.ItensEntryRepository;
import br.com.tqi.bookstore.service.BookService;
import br.com.tqi.bookstore.service.ItensEntryService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ItensEntryServiceTest {

    @Mock
    private ItensEntryRepository itensEntryRepository;
    private ItensEntryMapper itensEntryMapper;

    @Mock
    private BookService bookService;

    @InjectMocks
    private ItensEntryService itensEntryService;

    @Test
    void whenListItensEntryIsCalledThenReturnAListOfItensEntrys() {
        ItensEntry expectedSavedItensEntry = ItensEntryBuilder.builder().build().toItensEntry();

        when(itensEntryRepository.findAll()).thenReturn(Collections.singletonList(expectedSavedItensEntry));

        List<ItensEntry> foundListItensEntrys = itensEntryService.findAll();

        assertThat(foundListItensEntrys, is(not(empty())));
        assertThat(foundListItensEntrys.get(0), is(equalTo(expectedSavedItensEntry)));
    }

    @Test
    void whenValidItensEntryIdIsGivenThenReturnAItensEntry() throws NameAlreadyRegisteredException, IdNotFoundException {
        ItensEntry expectedSavedItensEntry = ItensEntryBuilder.builder().build().toItensEntry();
        Book book = BookBuilder.builder().build().toBook();

        when(bookService.findById(book.getId())).thenReturn(book);

        ItensEntry createdItensEntry = itensEntryService.create(expectedSavedItensEntry, book.getId());

        when(itensEntryRepository.findById(expectedSavedItensEntry.getId())).thenReturn(Optional.of(createdItensEntry));

        assertThat(createdItensEntry, is(equalTo(itensEntryService.findById(createdItensEntry.getId()))));
    }

    @Test
    void whenItensEntryInformedThenItShouldBeCreated() throws IdNotFoundException {
        ItensEntry expectedSavedItensEntry = ItensEntryBuilder.builder().build().toItensEntry();
        Book book = BookBuilder.builder().build().toBook();
        String firstId = expectedSavedItensEntry.getId();

//        when(itensEntryRepository.findByName(expectedSavedItensEntry.getName())).thenReturn(Optional.empty());
        when(bookService.findById(book.getId())).thenReturn(book);

        ItensEntry createdItensEntry = itensEntryService.create(expectedSavedItensEntry, book.getId());

        assertThat(createdItensEntry.getId(), not(equalTo(firstId)));
        assertThat(createdItensEntry.getQuantity(), is(equalTo(expectedSavedItensEntry.getQuantity())));
        assertThat(createdItensEntry.getInvoiceNumber(), is(equalTo(expectedSavedItensEntry.getInvoiceNumber())));
    }

    @Test
    void whenNotRegisteredItensEntryIdIsGivenThenThrowAnException() {
        ItensEntry expectedSavedItensEntry = ItensEntryBuilder.builder().build().toItensEntry();

        when(itensEntryRepository.findById(expectedSavedItensEntry.getId())).thenReturn(Optional.empty());

        assertThrows(IdNotFoundException.class, () -> itensEntryService.findById(expectedSavedItensEntry.getId()));
    }

    @Test
    void whenABookIsBoughtThenAddEntryOnBook() throws IdNotFoundException {

        Book bookToBeUpdated = BookBuilder.builder().build().toBook();
        double firstPrice = bookToBeUpdated.getPrice();
        int firstQnt = bookToBeUpdated.getQuantity();

        ItensEntry newRegisterToBeSavedOnBook = ItensEntryBuilder.builder().build().toItensEntry();

        itensEntryService.addEntryOnBook(newRegisterToBeSavedOnBook, bookToBeUpdated);

        assertThat(firstPrice, not(equalTo(newRegisterToBeSavedOnBook.getPrice())));
        assertThat(bookToBeUpdated.getQuantity(), is(equalTo(firstQnt + newRegisterToBeSavedOnBook.getQuantity())));
        assertThat(bookToBeUpdated.getItensEntry(), hasItem(newRegisterToBeSavedOnBook));
    }

}
