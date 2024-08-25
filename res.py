import requests
from bs4 import BeautifulSoup
import pandas as pd
from urllib.parse import urljoin

# Function to get email from a website URL
def get_emails_from_url(url):
    try:
        print(f"Fetching {url}...")
        # Request the website content
        response = requests.get(url, timeout=10)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Search for email in the page
        email = None
        for mailto in soup.select('a[href^=mailto]'):
            email = mailto['href'].replace('mailto:', '')
            print(f"Email found on homepage: {email}")
            break  # Take the first email found
        
        # If email not found on homepage, search for a contact page
        if not email:
            contact_link = None
            for link in soup.find_all('a'):
                href = link.get('href', '').lower()
                if 'contact' in href:
                    contact_link = href
                    print(f"Contact page found: {contact_link}")
                    break  # Take the first contact page found
            
            # If a contact page is found, check for email there
            if contact_link:
                contact_url = urljoin(url, contact_link)
                print(f"Fetching contact page: {contact_url}")
                response = requests.get(contact_url, timeout=10)
                soup = BeautifulSoup(response.content, 'html.parser')
                for mailto in soup.select('a[href^=mailto]'):
                    email = mailto['href'].replace('mailto:', '')
                    print(f"Email found on contact page: {email}")
                    break
        
        return email if email else "No email found"

    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return "Error fetching email"

# Function to save results to an Excel file
def save_to_excel(data, file_name='output.xlsx'):
    df = pd.DataFrame(data, columns=['Website', 'Email'])
    df.to_excel(file_name, index=False)
    print(f"Results saved to {file_name}")

# List of URLs to scrape emails from
urls = [
   "https://www.apple.com/",
"https://www.microsoft.com/"
"https://www.spotify.com/"
"https://www.airbnb.com/"
"https://www.tesla.com/"
"https://www.jackinthebox.com/"
]

# Store the results in a list
results = []

# Loop through each URL and find email
for url in urls:
    email = get_emails_from_url(url)
    results.append([url, email])

# Save results to Excel
save_to_excel(results, file_name='emails.xlsx')

print("Scraping completed.")