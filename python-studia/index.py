try:
    # Otwarcie plików wejściowych
    with open('plik1.txt', 'r', encoding='utf-8') as file1, open('plik2.txt', 'r', encoding='utf-8') as file2:
        # Odczytanie zawartości plików
        lines1 = file1.readlines()
        lines2 = file2.readlines()

        # Sprawdzenie, czy oba pliki mają taką samą liczbę linii
        if len(lines1) != len(lines2):
            raise ValueError("Pliki wejściowe mają różną liczbę linii")

        # Otwarcie pliku wyjściowego
        with open('plik_wyjsciowy.txt', 'w', encoding='utf-8') as output_file:
            # Iteracja przez linie obu plików
            for i in range(len(lines1)):
                # Zapisanie numerowanej listy w formacie nazwisko imię
                output_line = f"{lines2[i].strip()} {lines1[i].strip()}"
                # Zapisanie do pliku wyjściowego
                output_file.write(f"{i+1}. {output_line}\n")

    print("Scalenie plików zakończone pomyślnie.")

except FileNotFoundError:
    print("Nie można odnaleźć jednego z plików wejściowych.")

except ValueError as ve:
    print(f"Błąd: {ve}")

except Exception as e:
    print(f"Wystąpił nieoczekiwany błąd: {e}")
