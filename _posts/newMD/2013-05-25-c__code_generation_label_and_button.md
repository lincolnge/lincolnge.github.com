---
layout: post
title: C#代码生成label和button
categories:
- programming
tags:
- C#
---
{% include JB/setup %}

    //自动生成label
    for (int x = 0; x < 5;x++ )
    {
        Graphics
         dc = CreateGraphics();
        Show();
        Pen bluePen = new Pen(Color.Blue, 3);
        dc.DrawRectangle(bluePen, x*80, 0, 50, 50);
    }

    int _Height = 0;

    for (int i = 0; i < 10; i++)
    {
        Label sy = new Label();
        sy.AutoSize = true;
        sy.Location = new Point(0, _Height);
        _Height += sy.Height;
        sy.Text = i.ToString();
        Controls.Add(sy);
    } 

    //生成button
    Button[] buttons = new Button[50];
    // for (int i = 0; i < 5; i++) // 只产生5个button
    for (int i = 0; i < classroom_name_init.Length; i++)
    {
        int t_y = i / 10;
        int t_x = i % 10;
        if (classroom_name_init[i] != null)
        {
            buttons[i] = new Button();
            buttons[i].Name = "button" + i;
            // buttons[i].Text = buttons[i].Name;
            buttons[i].Text = zone_name_init + classroom_name_init[i];
            buttons[i].Size = new Size(60, 25);
            buttons[i].Location = new Point(110 + 70 * t_x, 210 + 50 * t_y);

            //panel1.Controls.Add(buttons[i]);
            buttons[i].BringToFront();//置于顶层
            buttons[i].Click += new EventHandler(Buttons_Click);                        
        }
        else
        {

        }
    }
    this.Controls.AddRange(buttons);

    //生成的button有按键效果
    void Buttons_Click(object sender, EventArgs e)
    {
        date_str = comboBox3.Text + " " + comboBox4.Text + "-" + comboBox5.Text;
        this.Text = (sender as Button).Text;
        Classroom classroom = new Classroom(zone_name_init, classroom_name_init, this.Text, date_str);
        this.Hide();
        classroom.ShowDialog();
    }
