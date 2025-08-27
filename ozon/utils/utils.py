import pandas as pd

def read_ozon(file):
    df = pd.read_csv(file, skiprows=25, nrows=30)
    selected_columns = df.iloc[:, [0, 3]]
    selected_columns.iloc[:, 0] = pd.to_datetime(selected_columns.iloc[:, 0])
    year = selected_columns.iloc[0, 0].year
    data = [
        {
            'datetime': row[0].strftime('%d-%b'),
            'oz': row[1]
        }
        for row in selected_columns.itertuples(index=False, name=None)
    ]
    return {
        'year': year,
        'data': data
    }


def read_radiation(file):
    df = pd.read_csv(file)

    df.columns = ['Channel Code', 'Value', 'Date', 'Time', 'Status']

    df['Time'] = df['Time'].str.split(':').str[:2].str.join(':')

    # تبدیل ستون Date به datetime
    df['Date'] = pd.to_datetime(df['Date'], format='%y/%m/%d', errors='coerce')

    pivot_df = df.pivot_table(index=['Date', 'Time'], columns='Channel Code', values='Value', aggfunc='first').reset_index()

    result = [
        {
            'date': row['Date'].strftime('%Y-%m-%d') if pd.notnull(row['Date']) else None,
            'time': row['Time'],
            'SU': row.get('SU', None),
            'SD': row.get('SD', None),
            'IU': row.get('IU', None),
            'ID': row.get('ID', None),
            'Tm': row.get('Tm', None)
        }
        for row in pivot_df.to_dict('records')
    ]

    return result       



def read_visibility(file):
    df = pd.read_excel(file, skiprows=1)
    selected_columns = df.iloc[:, [0, 1, 5]]
    selected_columns.iloc[:, 2] = selected_columns.iloc[:, 2].astype(str).str.replace(' KM', '').astype(float).astype(int)
    result = [
        {'date': row[0], 'time': row[1], 'vis': row[2]}
        for row in selected_columns.itertuples(index=False, name=None)
    ]

    return result










# file = "../data/visibility/may2025/visibility and present weather27May2025 00.00.xlsx"
# read_visibility(file)
# C:\Users\MBN\Documents\payesh\ozon\data\radiation\2025-05\27-5-2025.csv
# file = "../data/visibility/may2025/visibility and present weather27May2025 00.00.xlsx"
